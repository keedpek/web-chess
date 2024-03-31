import React, { FC } from 'react';
import { Time } from '../models/time';

interface CellProps {
  onTimeSelect: (time: number) => void;
  onStageChange: (stage: string) => void;
}

const ChooseTime: FC<CellProps> = ({onTimeSelect, onStageChange}) => {
  const handleTimeSelect = (time: number) => {
    onTimeSelect(time);
    onStageChange('game');
  }

  return (
    <div className='choose-time'>
      <h1>Выберите время</h1>
      <div className='button-holder'>
        <button onClick={() => handleTimeSelect(Time.WITHOUTTIMER)}>Без таймера</button>
        <button onClick={() => handleTimeSelect(Time.MINUTE)}>1 минута</button>
        <button onClick={() => handleTimeSelect(Time.FIVEMINUTES)}>5 минут</button>
        <button onClick={() => handleTimeSelect(Time.TENMINUTES)}>10 минут</button>
      </div>
    </div>
  );
}

export default ChooseTime;