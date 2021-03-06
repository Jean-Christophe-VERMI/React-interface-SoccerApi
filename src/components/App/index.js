import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../useDarkMode';
import { lighttheme, darktheme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/global';

// Components
import Toggle from '../Toggle/index';
import Navbar from '../Nav/Navbar';


// Containers
import AllMatchs from '../../containers/AllMatchs';
import PremierLeague from '../../containers/PremierLeague';
import LaLiga from '../../containers/LaLiga';
import SerieA from '../../containers/SerieA';
import Ligue1 from '../../containers/Ligue1';
import Bundesliga from '../../containers/Bundesliga';

// Styles
import AppStyled from './AppStyled';


const App = ({
  dispatchAllMatchs,
  dispatchPremierLeague,
  dispatchLaLiga,
  dispatchSeriea,
  dispatchLigue1,
  dispatchBundesliga,
  //dispatchChampionsLeague,
}) => {

  useEffect(() => {
    const getAllMatchs = async () => {
      try {
        const response = await axios.get('https://www.scorebat.com/video-api/v1/');
        const datas = await response.data;
        console.log(datas);

        const matchsPremierLeague = datas.filter((match) => match.competition.id === 15);
        const matchsLaLiga = datas.filter((match) => match.competition.id === 14);
        const matchsSerieA = datas.filter((match) => match.competition.id === 13);
        const matchsLigue1 = datas.filter((match) => match.competition.id === 10);
        const matchsBungesliga = datas.filter((match) => match.competition.id === 11);
        //const matchsChampionsLeague = datas.filter((match) => match.competition.id === 10);

        dispatchAllMatchs(datas);
        dispatchLaLiga(matchsLaLiga);
        dispatchPremierLeague(matchsPremierLeague);
        dispatchSeriea(matchsSerieA);
        dispatchLigue1(matchsLigue1);
        dispatchBundesliga(matchsBungesliga);

      } catch (error) {
        console.log(error);
      }
    };
    getAllMatchs();
  });

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lighttheme : darktheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppStyled>
        <Router>
          <header className="header">
              <div className="menu-site">
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <h2><NavLink className="title-site" to="/">ALLGOALS</NavLink></h2>
              </div>
              <Navbar />
            </header>
          <Switch>
            <Route exact path='/' component={AllMatchs} />
            <Route exact path='/premier-league' component={PremierLeague} />
            <Route exact path='/la-liga' component={LaLiga} />
            <Route exact path='/serie-a' component={SerieA} />
            <Route exact path='/ligue-1' component={Ligue1} />
            <Route exact path='/bundesliga' component={Bundesliga} />
          </Switch>
        </Router>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;