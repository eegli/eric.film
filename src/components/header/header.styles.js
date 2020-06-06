import styled from 'styled-components';

export const HeaderMainContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const HeaderOptionsContainer = styled.header`
  background-color: #eef0f2ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLinkText = styled.a`
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0px #feb8ce;
  letter-spacing: 0.5rem;
  &:hover {
    text-decoration: line-through;
  }
  color: #323639;
`;

export const StyledLogo = styled.img`
  height: 2rem;
`;

export const StyledHamburgerMenu = styled.div`
  font-size: 2rem;
  color: #eef0f2;
`;
