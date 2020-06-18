import styled from 'styled-components';

export const SelectionCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  max-width: 100%;
  @media screen and (min-width: 375px) {
    justify-content: center;
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
