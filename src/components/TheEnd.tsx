import React, { FC } from 'react';
import { Time } from '../models/time';

interface CellProps {
  onTimeSelect: (time: number) => void
}

const ChooseTime: FC<CellProps> = ({onTimeSelect}) => {
  return (
    <div className='choose-time'>
      <h1>Выберите время</h1>
      <div className='button-holder'>
        <button onClick={() => onTimeSelect(Time.WITHOUTTIMER)}>Без таймера</button>
        <button onClick={() => onTimeSelect(Time.MINUTE)}>1 минута</button>
        <button onClick={() => onTimeSelect(Time.FIVEMINUTES)}>5 минут</button>
        <button onClick={() => onTimeSelect(Time.TENMINUTES)}>10 минут</button>
      </div>
    </div>
  );
}

export default ChooseTime;