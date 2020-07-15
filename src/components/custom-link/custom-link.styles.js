import styled from 'styled-components';

export const CustomLinkText = styled.a`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  background-color: ${({ theme }) => theme.colors.baseBgraised};
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  text-decoration: none;
  border-top: 0.1rem solid white;
  border-left: 0.1rem solid white;
  border-color: ${({ theme }) => theme.colors.textShadowColor};
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.3rem;
  letter-spacing: 0.2rem;
  &:hover {
    text-decoration: line-through;
    text-decoration-color: ${({ theme }) => theme.colors.textShadowColor};
  }
`;
