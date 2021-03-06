import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import bplIcon from './icons/bpl.png';
import laligaIcon from './icons/laliga.png';
import ligue1Icon from './icons/ligue1.png';
import bundesligaIcon from './icons/bundesliga.png';
import serieaIcon from './icons/seriea.png';


const Menu = styled.div`
  width: 80%;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-block-start: 0;
  margin: 0;
  padding: 0;
  font-weight: bold;

  .menu {
    width: 75%;
    background-color: rgba(39, 144, 146, 0.5);
    border: none;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #279092;
    margin: .3rem;
    padding: 5px 10px;
    border-radius: 20px;
    background: #fff;

    &:hover {
      cursor: pointer;
      border: 2px solid #ffffff;
    }

  }

  img {
    padding-right: 5px;
    width: 35px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: #279092;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .menu {
      margin: .5rem auto;
      justify-content: flex-start;
    }

  }

  @media (max-width: 992px) and (orientation: landscape) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: #279092;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .menu {
      margin: .5rem auto;
      justify-content: flex-start;
    }
  }
  
  

`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Menu open={open}>
      <NavLink className="menu" onClick={() => setOpen(!open)} to='/premier-league' ><img src={bplIcon} alt='icon-premier-league' />Premier League</NavLink>
      <NavLink className="menu" onClick={() => setOpen(!open)} to='/ligue-1' ><img src={ligue1Icon} alt='icon-ligue-1' />Ligue 1</NavLink>
      <NavLink className="menu" onClick={() => setOpen(!open)} to='/la-liga' ><img src={laligaIcon} alt='icon-la-liga' />La Liga</NavLink>
      <NavLink className="menu" onClick={() => setOpen(!open)} to='/serie-a' ><img src={serieaIcon} alt='icon-serie-A' />Serie A</NavLink>
      <NavLink className="menu" onClick={() => setOpen(!open)} to='/bundesliga' ><img src={bundesligaIcon} alt='icon-bundesliga' />BundesLiga</NavLink>
    </Menu>
  )
}

export default RightNav;