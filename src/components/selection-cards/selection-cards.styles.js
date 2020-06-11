import styled from 'styled-components';

export const SelectionCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  width: 100%;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.baseBgraised};
  padding: 1.2rem;
  margin: 0 0.5rem 0.5rem 0;
  border-radius: 0.6rem;
  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.textShadowColor};
    cursor: pointer;
  }
`;
