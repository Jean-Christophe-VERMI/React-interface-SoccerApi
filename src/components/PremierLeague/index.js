import React  from 'react';

// Component
import Match from '../Match';
import Loading from '../Loading';

// Style
import PremierLeagueStyled from './PremierLeagueStyled';

const PremierLeague = ({
  allMatchs,
}) => {
  
  return (
    <PremierLeagueStyled>
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
    </PremierLeagueStyled>
  );
};

export default PremierLeague;
