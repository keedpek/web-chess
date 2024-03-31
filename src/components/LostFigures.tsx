import React, { FC } from 'react';
import { Figure } from '../models/figures/Figure';

interface LostFiguresProps {
  whiteFigures: Figure[];
  blackFigures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({whiteFigures, blackFigures}) => {
  return (
    <div className='graveyard'>
      <div className='side'>
        {whiteFigures.map(figure => 
          <div key={figure.id}>
            {figure.logo && <img src={figure.logo} width={30} height={30} alt=''/>}
          </div>  
        )}
      </div>
      <hr></hr>
      <div className='side'>
        {blackFigures.map(figure => 
          <div key={figure.id}>
            {figure.logo && <img src={figure.logo} width={30} height={30} alt=''/>}
          </div>  
        )}
      </div>
    </div>
  );
}

export default LostFigures;