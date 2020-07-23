import styled from 'styled-components';
import Ballon from './icons/ball-Dark.svg';

const ToggleStyled = styled.div`

  width: 2.5rem;
  height: 2.5rem;
  
  .toogle-btn {
    background-color: #279092;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    background-image: url(${Ballon});
    background-size: 2rem;
    padding: 1rem;
    background-repeat: no-repeat;
    background-position: center;
  }
  
`;

export default ToggleStyled;