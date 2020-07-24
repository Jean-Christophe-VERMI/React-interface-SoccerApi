import styled from 'styled-components';

const MatchStyled = styled.div`

  width: 30%;
  margin: 0 auto;
  padding: .5rem;
  

  .match {
    background: ${({ theme }) => theme.background};
    padding: .5rem;
    border-radius: 5px;
  }

  .thumb {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;

  }
  
`;

export default MatchStyled;