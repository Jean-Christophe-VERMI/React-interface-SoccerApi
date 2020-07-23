import React from 'react';
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
    text-decoration: none;
    color: #279092;
    margin: .3rem;
    padding: 5px 10px;
    border-radius: 20px;
    background: #fff;

    &:hover {
      cursor: pointer;
      background-color: #ccc;
      color: #fff;
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
    }

  }
  

`;

const RightNav = ({ open }) => {
  return (
    <Menu open={open}>
      <a className="menu" href="" title="Première League"><img src={bplIcon} />Premier League</a>
      <a className="menu" href="" title="Ligue 1"><img src={ligue1Icon} />Ligue 1</a>
      <a className="menu" href="" title="La Liga"><img src={laligaIcon} />La Liga</a>
      <a className="menu" href="" title="Serie A"><img src={serieaIcon} />Serie A</a>
      <a className="menu" href="" title="BundesLiga"><img src={bundesligaIcon} />BundesLiga</a>
    </Menu>
  )
}

export default RightNav;