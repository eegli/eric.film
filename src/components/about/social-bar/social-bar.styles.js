import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IconContainer = styled.a`
  padding: 0 0.3rem;
  color: ${({ theme }) => theme.colors.textSecondaryColor};
`;
