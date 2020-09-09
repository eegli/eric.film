import styled from 'styled-components';

export const LandingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 100%;
`;

export const LinkText = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  border-top: 0.1rem solid ${({ theme }) => theme.colors.textPrimary};
  border-left: 0.1rem solid ${({ theme }) => theme.colors.textPrimary};
  border-color: ${({ theme }) => theme.colors.pink};
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.3rem;
  letter-spacing: 0.2rem;
  &:hover {
    text-decoration: line-through;
    text-decoration-color: ${({ theme }) => theme.colors.pink};
  }
`;
