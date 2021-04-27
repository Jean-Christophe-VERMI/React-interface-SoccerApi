import React from 'react';

//Component
import Match from '../Match';
import Loading from '../Loading';

//Style
import BundesligaStyled from './BundesligaStyled';

const Bundesliga = ({
  allMatchs
}) => {
  
  return (
    <BundesligaStyled>
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
    </BundesligaStyled>
  );
};

export default Bundesliga;