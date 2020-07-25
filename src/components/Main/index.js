import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading';

//Component 
import AllMatchs from '../AllMatchs';
import MainStyled from './MainStyled';

const Main = ({}) => {

  const [matchs, setMatchs] = useState(null);

  useEffect(() => {
    const getAllMatchs = async () => {
      try {
        const response = await axios.get('https://www.scorebat.com/video-api/v1/');
        const datas = await response.data;
        console.log(datas);
        setMatchs(datas);
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
