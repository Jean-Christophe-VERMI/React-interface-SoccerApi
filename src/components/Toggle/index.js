// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';


import ToggleStyled from './ToggleStyled';


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleStyled>
     <button className="toogle-btn" lightTheme={isLight} onClick={toggleTheme} ></button>
    </ToggleStyled>
    
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;