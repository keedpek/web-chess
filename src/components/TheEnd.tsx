import React, { FC } from 'react';
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';

interface CellProps {
  restart: () => void;
  currentPlayer: Player | null;
}

const TheEnd: FC<CellProps> = ({restart, currentPlayer}) => {
  const handleNewGame = () => {
    restart();
  }

  return (
    <div className='end-game'>
      <h1>🎉{currentPlayer?.color === Colors.WHITE ? 'Черные' : 'Белые'} победили!🎉</h1>
      <button onClick={handleNewGame}>Новая игра</button>
    </div>
  );
}

export default TheEnd;