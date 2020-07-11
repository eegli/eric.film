import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IconContainer = styled.a`
  margin: 0 0.5rem;
  font-size: ${({ theme }) => theme.fontsizes.baseIconFontSize};
  color: ${({ theme }) => theme.colors.textSecondaryColor};
`;
