import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const HeaderMainContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 2.1rem;
  align-items: center;
`;

export const HeaderOptionsContainer = styled.header`
  background-color: ${({ theme }) => theme.baseTextLightWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLinkText = styled.a`
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0px ${({ theme }) => theme.textShadowColor};
  letter-spacing: 0.5rem;
  &:hover {
    text-decoration: line-through;
  }
  color: ${({ theme }) => theme.baseBgChromeGrey};
`;

export const StyledLogo = styled.img`
  height: 2rem;
`;

export const StyledHamburger = styled(FaBars)`
  font-size: 1.8rem;
  color: #eef0f2;
`;
