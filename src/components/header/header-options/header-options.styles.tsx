import styled from 'styled-components';
import { DarkTheme } from '@/styles/theme';

type Props = {
  isMobile: boolean;
  href: string;
  path: string;
};

const mobileColor = ({ theme }: { theme: DarkTheme }) => theme.colors.baseBg;
const desktopColor = ({ theme }: { theme: DarkTheme }) =>
  theme.colors.textPrimaryColor;

export const StyledLinkText = styled.a<Props>`
  width: 100%;
  padding: ${({ isMobile }) => (isMobile ? '1.4rem' : '0')} 1rem;
  text-align: center;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0px ${({ theme }) => theme.colors.textShadowColor};
  letter-spacing: 0.4rem;
  &:hover {
    text-decoration: line-through;
    cursor: pointer;
  }
  color: ${({ isMobile }) => (isMobile ? mobileColor : desktopColor)};
  text-decoration: ${({ href, path }) =>
    href === path ? 'underline' : 'none'};
`;
