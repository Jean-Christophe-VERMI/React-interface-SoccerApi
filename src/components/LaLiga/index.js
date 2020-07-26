import React from 'react';

//Component
import Match from '../Match';
import Loading from '../Loading';

//Style
import LaLigaStyled from './LaLigaStyled';

const LaLiga = ({
  allMatchs
}) => {
  
  return (
    <LaLigaStyled>
      {!allMatchs && (
        <Loading />
      )}
      {allMatchs && (
        <div className="matchslist">
          {allMatchs.map((match) => (
            <Match key={match.id} {...match} />
          ))}
      </div>
      )}
    </LaLigaStyled>
  );
};

export default LaLiga;