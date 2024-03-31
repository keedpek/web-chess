import React, { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
  time: number;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart, time}) => {
  const [blackTime, setBlackTime] = useState(time);
  const [whiteTime, setWhiteTime] = useState(time);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]) 

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }
    const callback = currentPlayer?.color === Colors.BLACK ? decrementBlackTimer : decrementWhiteTimer; 
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1);
  }

  const handleRestart = () => {
    setBlackTime(600);
    setWhiteTime(600);
    restart();
  }

  return (
    <div className='timer'>
      <button onClick={handleRestart}>Restart</button>
      <h2>{Math.floor(blackTime / 60)}:{(blackTime % 60 < 10) ? '0' + (blackTime % 60) : blackTime % 60}</h2>
      <h2>{Math.floor(whiteTime / 60)}:{(whiteTime % 60 < 10) ? '0' + (whiteTime % 60) : whiteTime % 60}</h2>
    </div>
  );
}

export default Timer;
