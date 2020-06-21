import styled from 'styled-components';

import Select from 'react-select';

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;

  @media screen and (max-width: 850px) {
    justify-content: center;
    padding: 0;
  }
`;

export const SelectionCardContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  flex-wrap: wrap;
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
  padding: 0.8rem;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.baseBgraised};
  border: none;
  border-color: none;
  font-size: ${({ theme }) => theme.fontsizes.secondaryFontSize};
  color: ${({ theme }) => theme.textSecondaryColor};
  &:last-child {
    margin: 0;
  }
`;

type CardContainerProps = {
  active: boolean;
};

export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.textLinkColor : theme.baseBgraised};
  padding: 0.7rem 1rem;
  margin: 0.5rem;
  border-radius: 0.6rem;
  color: ${({ theme, active }) => (active ? theme.baseBg : theme.textColor)};
  &:hover {
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme, active }) =>
      active ? theme.baseBg : theme.baseBgraised};
    cursor: pointer;
  }
`;
