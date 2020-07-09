import styled from 'styled-components';
import Ballon from './icons/ball-Dark.svg';

const ToggleStyled = styled.div`

  width: 2.5rem;
  height: 2.5rem;
  padding: 1rem;
  
  .toogle-btn {
    background-color: #53D1BA;
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid #53D1BA;
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