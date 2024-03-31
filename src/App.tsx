import React, { useEffect, useState } from 'react';
import "./App.css";
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';
import LostFigures from './components/LostFigures';
import Timer from './components/timer';
import ChooseTime from './components/ChooseTime';

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [isLightTheme, setTheme] = useState(true);
  const [time, setTime] = useState<number>(0);
  const handleTimeSelection = (time: number) => {
    setTime(time);
  }
  const [stage, setStage] = useState<string>('settings')
  const changeStage = (stage: string) => {
    setStage(stage);
  }
  
  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
    setStage('settings')
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.BLACK ? whitePlayer : blackPlayer)
  }

  return (
    <div className={['wrapper', isLightTheme ? 'light-theme' : 'dark-theme'].join(' ')}>
      <button className='toggle-theme' onClick={() => {
        setTheme((prevTheme) => !prevTheme)
      }}>{isLightTheme ? '🌑' : '🌞'}</button>
      {stage === 'settings' && <ChooseTime onTimeSelect={handleTimeSelection} onStageChange={changeStage}/>}
      {stage === 'game' && 
        <div className='app'>
          {time !== 0 && <Timer
            currentPlayer={currentPlayer}
            restart={restart}
            time={time}
          />}
          <BoardComponent 
            board={board}
            setBoard={setBoard}
            currentPlayer={currentPlayer}
            swapPlayer={swapPlayer}
          />
          <LostFigures
            whiteFigures={board.lostWhiteFigures} 
            blackFigures={board.lostBlackFigures} 
          />
        </div>
      }
    </div>
  );
}

export default App;
