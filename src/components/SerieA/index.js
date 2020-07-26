import React from 'react';

//Component
import Match from '../Match';
import Loading from '../Loading';

//Style
import SerieAStyled from './SerieAStyled';

const SerieA = ({
  allMatchs
}) => {
  
  return (
    <SerieAStyled>
      {!allMatchs && (
        <Loading />
      )}
      {allMatchs && (
        <div className="matchslist">
          {allMatchs.map((match) => (
            <Match key={match.title} {...match} />
          ))}
      </div>
      )}
    </SerieAStyled>
  );
};

export default SerieA;