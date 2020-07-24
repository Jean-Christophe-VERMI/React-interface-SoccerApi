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
      <div className="match">
        <img className="thumb" title="thumbnail" src={thumbnail} />
        <p>{title}</p>
      </div>
    </MatchStyled>
  );
};

export default Match;
