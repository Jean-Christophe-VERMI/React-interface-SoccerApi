// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';

import ToggleStyled from './ToggleStyled';

const Toggle = ({ theme, toggleTheme }) => {
  
  return (
    <ToggleStyled>
     <button className="toogle-btn" lighttheme="true" onClick={toggleTheme} ></button>
    </ToggleStyled>
    
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;