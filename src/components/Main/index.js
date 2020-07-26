import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading';

//Component 
import AllMatchs from '../AllMatchs';
import MainStyled from './MainStyled';

const Main = ({
  dispatchPremierLeague,
  dispatchLaLiga,
  dispatchSeriea,
}) => {

  const [matchs, setMatchs] = useState(null);

  useEffect(() => {
    const getAllMatchs = async () => {
      try {
        const response = await axios.get('https://www.scorebat.com/video-api/v1/');
        const datas = await response.data;
        console.log(datas);
        setMatchs(datas);
        const matchsPremierLeague = datas.filter((match) => match.competition.id === 15);
        const matchsLaLiga = datas.filter((match) => match.competition.id === 14);
        const matchsSerieA = datas.filter((match) => match.competition.id === 13);
        dispatchLaLiga(matchsLaLiga);
        dispatchPremierLeague(matchsPremierLeague);
        dispatchSeriea(matchsSerieA);
      } catch (error) {
        console.log(error);
      }
    };
    getAllMatchs();
  }, []);
  
  
  return (
    <MainStyled>
      {!matchs && (
        <Loading />
      )}
      {matchs && (
        <AllMatchs datas={matchs} />
      )}
    </MainStyled>
    
  );
};

export default Main;
