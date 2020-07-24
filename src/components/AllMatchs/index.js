import React from 'react';

//Component
import Match from '../Match';

//Style
import AllMatchsStyled from './allMatchsStyled';

const AllMatchs = ({datas}) => {
  
  return (
    <AllMatchsStyled>
      <div className="matchslist">
        {datas.map((match) => (
          <Match key={match.id} {...match} />
        ))};
      </div>
    </AllMatchsStyled>
  );
};

export default AllMatchs;
