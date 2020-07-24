import React from 'react';
import MatchStyled from './MatchStyled';

const Match = ({
  title, 
  embed, 
  thumbnail, 
  date, 
  side1, 
  side2, 
  competition, 
  videos
}) => {
  
  return (
    <MatchStyled>
      <div>
        <div>{thumbnail}</div>
        <p>{title}</p>
      </div>
    </MatchStyled>
  );
};

export default Match;
