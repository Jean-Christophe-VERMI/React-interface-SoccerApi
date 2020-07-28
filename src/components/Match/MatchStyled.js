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

    -webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	  animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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

  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
  }
  
`;

export default MatchStyled;