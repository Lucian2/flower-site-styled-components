import styled from 'styled-components';

export const IntroStyledCtn = styled.div`
  background-color: #ada195;

  .borderCtn {
    position: absolute;
    width: 98%;
    height: 96%;
    border: 2px solid #d9d9d9;
    border-radius: 4.7rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 750px) {
    height: calc(100vh - 110px);
  }
`;
