import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../useDarkMode';
import { lightTheme, darkTheme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/global';

// Components
// import HomePage from '../HomePage';
import Toggle from '../Toggle/index';
import Navbar from '../Nav/Navbar';
// import Main from '../Main';

//Containers
import Main from '../../containers/Main';

import AppStyled from './AppStyled';


const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppStyled>
        <header className="header">
          <div className="menu-site">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <h2><a className="title-site" title="accueil" href="">ALLGOALS</a></h2>
          </div>
          <Navbar />
        </header>
        <Main />
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;