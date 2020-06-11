import styled from 'styled-components';

export const CustomLinkText = styled.a`
  color: ${({ theme }) => theme.textLinkColor};
  background-color: ${({ theme }) => theme.baseBgraised};
  font-size: 1rem;
  text-decoration: none;
  border-top: 0.1rem solid white;
  border-left: 0.1rem solid white;
  border-color: ${({ theme }) => theme.textShadowColor};
  padding: 0.2rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.3rem;
  letter-spacing: 0.4rem;
  &:hover {
    text-decoration: line-through;
    text-decoration-color: ${({ theme }) => theme.textShadowColor};
  }
`;
