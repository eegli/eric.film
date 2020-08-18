import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;

export const HeaderMainBgContainer = styled.div`
  // background-color: ${({ theme }) => theme.colors.bgPrimary};
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
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  display: flex;
  color: ${({ theme }) => theme.colors.textSecondary};
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

type Props = {
  rotated: boolean;
};

export const MenuIcon = styled.div<Props>`
  transform: ${({ rotated }) => (rotated ? 'rotate(90deg)' : '')};
  transition: 200ms linear all;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  & > svg {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  @media screen and (min-width: 700px) {
    display: none;
  }
`;
