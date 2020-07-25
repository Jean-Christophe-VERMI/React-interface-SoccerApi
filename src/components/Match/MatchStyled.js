import styled from 'styled-components';

const MatchStyled = styled.div`

  width: 33%;
  margin: 0 auto;
  padding: .5rem 0rem;
  

  .match {
    background: ${({ theme }) => theme.background};
    padding: .5rem;
    border-radius: 5px;
    min-height: 100%;
  }

  .thumb {
    width: 100%;
  }

  .match-infos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h4 {
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

  }
  
`;

export default MatchStyled;