import styled from 'styled-components';

export interface StyledDecorativeTextProps {
  $firstLetterColor?: string;
  $firstLetterFontSize?: string;
  $textFontSize?: string;
}

export const StyledDecorativeText = styled.div<StyledDecorativeTextProps>`
  span {
    &:nth-child(1) {
      @media screen {
      }
      font-size: ${(props) => props.$firstLetterFontSize ?? '12.5rem'};
      color: ${(props) => props.$firstLetterColor ?? '#636A60'};
      @media screen and (max-width: 650px) {
        font-size: 2.5rem;
        align-self: flex-start;
        margin-top: 1rem;
      }
    }
    &:nth-child(2) {
      font-size: ${(props) => props.$textFontSize ?? '1.75rem'};
      text-align: ${(props) => (props.$firstLetterColor ? 'justify' : '')};
      margin: ${(props) =>
        props.$firstLetterColor ? '0 3rem 4rem -4rem' : ''};
      z-index: 2;
      @media screen and (max-width: 650px) {
        font-size: 1rem;
        margin: ${(props) => (props.$firstLetterColor ? '0 0 1rem 0' : '')};
      }
    }
  }
`;
