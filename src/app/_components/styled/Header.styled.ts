import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #b4aa9f;
  padding: 2.8rem 0 1rem 0;
  .mobileMenuList {
    z-index: 100;
    padding: 2.5rem;
    &.slide-in {
      animation: slideIn 0.2s forwards;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
