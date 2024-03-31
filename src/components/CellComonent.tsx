import React, { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
  return (
    <div 
    className={['cell', cell.color, selected ? 'selected' : '', (cell.available && !cell.figure) ? 'available' : '', cell.available && cell.figure ? 'under-attack' : ''].join(' ')}
    onClick={() => {click(cell)}}
    >
      {cell.figure?.logo && <img src={cell.figure.logo} alt='' />}
    </div>
  );
}

export default CellComponent;