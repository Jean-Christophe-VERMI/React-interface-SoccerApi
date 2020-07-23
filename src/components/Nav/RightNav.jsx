import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row nowrap;
  margin-block-start: 0;
  margin: 0;
  font-weight: bold;

  li {
    padding: 18px 10px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #279092;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 1.5rem;
    transition: transform 0.3s ease-in-out;

    ul {
      margin-block-start: 0;
    }

    li {
      color: #fff;
    }

    a {
      text-decoration: none;
      color: #fff;
    }


  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="" title="Première League">Première League</a></li>
      <li><a href="" title="Ligue 1">Ligue 1</a></li>
      <li><a href="" title="La Liga">La Liga</a></li>
      <li><a href="" title="Serie A">Serie A</a></li>
      <li><a href="" title="BundesLiga">BundesLiga</a></li>
    </Ul>
  )
}

export default RightNav;