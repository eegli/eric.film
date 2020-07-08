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

  background-color: ${({ theme }) => theme.colors.baseBg};
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
  position: ${({ blog }) => (blog ? 'static' : '-webkit-sticky') /* Safari */};
  position: ${({ blog }) => (blog ? 'static' : 'sticky')};
  top: 0;

  background-color: ${({ theme }) => theme.colors.baseBg};
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
  background-color: ${({ theme }) => theme.colors.baseBg};
  font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
  color: ${({ theme }) => theme.colors.textSecondaryColor};
`;

type CardContainerProps = {
  active: boolean;
};

export const CardContainer = styled.a<CardContainerProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.textLinkColor : theme.colors.baseBgraised};
  padding: 0.7rem 1rem;
  margin: 0.5rem;
  border-radius: 0.6rem;
  color: ${({ theme, active }) =>
    active ? theme.colors.baseBg : theme.colors.textPrimaryColor};
  &:hover {
    background-color: ${({ theme }) => theme.colors.textPrimaryColor};
    color: ${({ theme, active }) =>
      active ? theme.colors.baseBg : theme.colors.baseBgraised};
    cursor: pointer;
  }
`;
