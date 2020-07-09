import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../useDarkMode';
import { lightTheme, darkTheme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/global';

// Components
// import HomePage from '../HomePage';
import Toggle from '../Toggle/index';
import AppStyled from './AppStyled';

//Containers


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
        <h1>Header</h1>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;