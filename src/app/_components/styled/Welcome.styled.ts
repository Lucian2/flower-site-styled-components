import styled from 'styled-components';

export const StyledWelcome = styled.div`
  padding: 4.35rem 7.5rem 2rem 8rem;
  .imagesCtn {
    width: fit-content;
    img {
      &:last-child {
        left: 80%;
      }
    }
  }
  hr {
    background-color: black;
    &.vertical-line {
      width: 6px;
      height: 65%;
      right: 0;
      top: 20%;
    }
    &.horizontal-line {
      width: 95%;
      height: 6px;
    }
  }

  div {
    &.textSection {
      width: 50%;
      @media screen and (max-width: 993px) {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1420px) {
    padding: 5rem 2rem 1.5rem 2rem;
  }
  @media screen and (max-width: 993px) {
    padding: 2rem;
  }
`;
