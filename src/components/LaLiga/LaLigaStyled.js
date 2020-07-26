import styled from 'styled-components';

const LaLigaStyled = styled.div`

  width: 90%;
  margin: 1rem auto;

  .matchslist {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

  }

  @media (max-width: 768px) {

    .matchslist {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .thumb {
      width: 100%;
    }

  }
  
`;

export default LaLigaStyled;