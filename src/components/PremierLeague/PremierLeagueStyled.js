import styled from 'styled-components';

const PremierLeagueStyled = styled.div`
  width: 95%;
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

export default PremierLeagueStyled;