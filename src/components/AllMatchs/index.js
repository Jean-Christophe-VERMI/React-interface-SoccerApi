import React from 'react';

//Component
import Match from '../Match';
import Loading from '../Loading';

//Style
import AllMatchsStyled from './allMatchsStyled';

const AllMatchs = ({
  allMatchs
}) => {
  
  return (
    <AllMatchsStyled>
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
    </AllMatchsStyled>
  );
};

export default AllMatchs;
