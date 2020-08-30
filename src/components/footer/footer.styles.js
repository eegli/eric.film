import styled from 'styled-components';

export const Hr = styled.hr`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  height: 3px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  margin-bottom: 1rem;
  & > svg {
    margin-left: auto;
    color: red;
  }
  @media screen and (max-width: 769px) {
    padding: 0 1rem;
  }
`;

export const SLink = styled.a`
  margin: 0 0.5rem;
  &:last-child {
    margin: 0 0 0 0.5rem;
  }
`;
