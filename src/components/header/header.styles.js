import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;

export const HeaderMainBgContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  display: flex;
  justify-content: center;
`;

export const HeaderMainContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  width: 100%;
`;

export const HeaderOptionsMobileContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.whitePrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderOptionsDesktopContainer = styled.header`
  display: flex;
  align-items: center;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const StyledLogo = styled.img`
  height: 2rem;
`;

export const StyledHamburger = styled(FaBars)`
  font-size: 1.8rem;
  color: #eef0f2;
  @media screen and (min-width: 700px) {
    display: none;
  }
`;
