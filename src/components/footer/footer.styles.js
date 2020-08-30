import styled from 'styled-components';

export const Hr = styled.hr`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  height: 3px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  margin-bottom: 1rem;
  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;

export const SLink = styled.a`
  margin: 0 0.5rem;
  &:last-child {
    margin: 0 0 0 0.5rem;
  }
`;
