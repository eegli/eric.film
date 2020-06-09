import styled from 'styled-components';

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
