import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
`;

export const HeaderMainBgContainer = styled.div`
  background-color: ${({ theme }) => theme.baseBgChromeGrey};
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

export const StyledLogo = styled.img`
  height: 2rem;
`;

export const StyledHamburger = styled(FaBars)`
  font-size: 1.8rem;
  color: #eef0f2;
`;
