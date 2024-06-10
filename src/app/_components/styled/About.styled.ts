import styled from 'styled-components';

export const AboutStyledComponent = styled.div`
  padding: 1rem 7.5rem 1.5rem 8rem;
  background-color: #ada195;
  p {
    text-align: justify;
    width: 70%;
  }
  @media screen and (max-width: 1420px) {
    padding: 5rem 2rem 1.5rem 2rem;
  }
  @media screen and (max-width: 993px) {
    padding: 2rem;
    p {
      width: 100%;
    }
  }
`;
