import React from 'react';

//Component
import Match from '../Match';
import Loading from '../Loading';

//Style
import Ligue1Styled from './Ligue1Styled';

const Ligue1 = ({
  allMatchs
}) => {
  
  return (
    <Ligue1Styled>
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
    </Ligue1Styled>
  );
};

export default Ligue1;