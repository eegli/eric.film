import styled from 'styled-components';

type Props = {
  isMobile: boolean;
};

const mobileColor = ({ theme }) => theme.baseBgChromeGrey;
const desktopColor = ({ theme }) => theme.baseTextLightWhite;

export const StyledLinkText = styled.a<Props>`
  width: 100%;
  padding: ${({ isMobile }) => (isMobile ? '1.4rem' : '0')} 1rem;
  text-align: center;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0px ${({ theme }) => theme.textShadowColor};
  letter-spacing: 0.5rem;
  &:hover {
    text-decoration: line-through;
  }
  color: ${({ isMobile }) => (isMobile ? mobileColor : desktopColor)};
`;
