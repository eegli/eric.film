import styled from 'styled-components';

export const Hr = styled.hr`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.baseBgraised};
  height: 3px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  margin-bottom: 1rem;
`;

export const SLink = styled.a`
  margin: 0 0.5rem;
  &:last-child {
    margin: 0 0 0 0.5rem;
  }
`;
