import styled from 'styled-components';

type ContainerProps = {
  sticky?: boolean;
};

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 4rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xsmall}) {
    padding: 0 2rem;
    justify-content: center;
  }
`;

export const SelectionCardContainer = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  flex-wrap: wrap;
  position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
  z-index: ${({ sticky }) => (sticky ? 1 : 0)};
  top: 0;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  overflow-x: hidden;
`;

export const SortButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xsmall}) {
    flex: 1 1 100%;
    justify-content: center;
    margin: 1rem 0;
  }
`;

export const SortButton = styled.button`
  cursor: pointer;
  margin-left: 0.5rem;
  outline: none;
  text-decoration: underline;
  border: none;
  letter-spacing: 1px;
  border-color: none;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

type CardContainerProps = {
  active: boolean;
};

export const CardContainer = styled.a<CardContainerProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.bgTertiary : theme.colors.bgSecondary};
  padding: 0.7rem 1rem;
  margin: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 0.3rem;
  border-bottom: 0.2rem solid
    ${({ theme, active }) => (active ? theme.colors.pink : 'none')};
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.bgTertiary};
    color: ${({ theme }) => theme.colors.textPrimary};
    cursor: pointer;
  }
`;
