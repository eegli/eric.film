import styled from 'styled-components';

type Props = {
  blog?: boolean;
};

export const CategoryContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;
  position: ${({ blog }) => (blog ? 'static' : '-webkit-sticky') /* Safari */};
  position: ${({ blog }) => (blog ? 'static' : 'sticky')};
  top: 0;

  @media screen and (max-width: 850px) {
    justify-content: center;
    padding: 0;
  }
`;

export const SelectionCardContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  flex-wrap: wrap;
  position: ${({ blog }) => (blog ? 'static' : 'sticky')};
  top: 0;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  overflow-x: hidden;
`;

export const SortButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 850px) {
    flex: 1 1 100%;
    justify-content: center;
    margin: 0.5rem 0;
  }
`;

export const SortButton = styled.button`
  cursor: pointer;
  margin-left: 0.5rem;
  text-decoration: underline;
  border: none;
  letter-spacing: 1px;
  border-color: none;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  color: ${({ theme }) => theme.colors.whiteSecondary};
`;

type CardContainerProps = {
  active: boolean;
};

export const CardContainer = styled.a<CardContainerProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.darkSecondary_2 : theme.colors.darkSecondary};
  padding: 0.7rem 1rem;
  margin: 0.5rem;
  color: ${({ theme }) => theme.colors.whitePrimary};
  border-radius: 0.3rem;
  border-bottom: 0.2rem solid
    ${({ theme, active }) => (active ? theme.colors.pinkPrimary : 'none')};
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.whiteSecondary};
    color: ${({ theme }) => theme.colors.darkSecondary};
    cursor: pointer;
  }
`;
