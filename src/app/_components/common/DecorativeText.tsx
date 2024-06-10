import { FunctionComponent } from 'react';
import { StyledDecorativeText } from '../styled/DecorativeText.style';

interface DecorativeTextProps {
  text: string;
  ctnClasses?: string;
  firstLetterColor?: string;
  firstLetterFontSize?: string;
  textFontSize?: string;
}

export const DecorativeText: FunctionComponent<DecorativeTextProps> = ({
  text,
  ctnClasses,
  firstLetterColor,
  firstLetterFontSize,
  textFontSize,
}) => {
  return (
    <StyledDecorativeText
      className={`decorativeTextCtn d-flex align-items-center ${
        ctnClasses ?? ''
      }`}
      $firstLetterColor={firstLetterColor}
      $firstLetterFontSize={firstLetterFontSize}
      $textFontSize={textFontSize}
    >
      <span className='lh-1'>{text.slice(0, 1)}</span>
      <span className='mt-4'>{text.slice(1)}</span>
    </StyledDecorativeText>
  );
};
