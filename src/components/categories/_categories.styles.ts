import styled from 'styled-components';

export const SelectionCardContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  width: 100%;
  flex-wrap: wrap;
`;

export const SortSelectContainer = styled.div`
  align-self: center;
  margin-left: 2rem;
  @media screen and (max-width: 700px) {
    flex: 0 1 100%;
    margin: 1rem 0;
  }
`;

export const SortSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 80px;
    background-color: ${({ theme }) => theme.baseBgraised};
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  & > div > select {
    background-color: ${({ theme }) => theme.baseBgraised};
    margin: 0 auto;
    color: ${({ theme }) => theme.textColor};
    border: none;
    font-size: ${({ theme }) => theme.fontsizes.baseFontSize};
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
