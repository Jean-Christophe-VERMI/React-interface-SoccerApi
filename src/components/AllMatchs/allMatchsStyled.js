import styled from 'styled-components';

const AllMatchsStyled = styled.div`

  width: 90%;
  margin: 1rem auto;

  .matchslist {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

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

export default AllMatchsStyled;