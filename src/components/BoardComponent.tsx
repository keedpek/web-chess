import React, { FC, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import CellComponent from './CellComonent';
import { Cell } from '../models/Cell';


interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function click(cell:Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      console.log(selectedCell);
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      console.log(selectedCell);
    } else if (selectedCell === cell) {
      setSelectedCell(null);
    } else if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className='board'>
      {board.cells.map((row, index) => 
        <React.Fragment key={index}>
          {row.map(cell => 
            <CellComponent
              click={click} 
              cell={cell}
              key={cell.id}
              selected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
             />  
          )}
        </React.Fragment>
      )}
    </div>
  );
}

export default BoardComponent;