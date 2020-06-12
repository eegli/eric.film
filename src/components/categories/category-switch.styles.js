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

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.baseBgraised};
  padding: 0.7rem 1rem;
  margin: 0.5rem;
  border-radius: 0.6rem;
  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.baseBgraised};
    cursor: pointer;
  }
`;
