import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr';

// Component 
import ModalVideos from '../ModalVideos';
// import Iframe from '../Iframe';

// Style
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
        {Moment(date).locale('fr').format("dddd, Do MMMM YYYY")}
        <div className="match-infos">
          <h4>{title}</h4>
          <ModalVideos dataVideo={videos} />
        </div>
      </div>
    </MatchStyled>
  );
};

export default Match;
