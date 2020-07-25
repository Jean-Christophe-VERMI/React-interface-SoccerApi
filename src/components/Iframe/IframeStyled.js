import styled from 'styled-components';

const IframeStyled = styled.div`

  .iframe {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .iframe {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

  }
  
`;

export default IframeStyled;