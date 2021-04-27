import styled from 'styled-components';

const AppStyled = styled.div`

  .header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 65px;
    background: #279092;
    padding: 5px;
  }

  .menu-site {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .title-site {
    text-decoration: none;
    color: #fff;
    margin-left: 10px;
  }

`;

export default AppStyled;