import styled from 'styled-components';

export const BlogCategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: stretch;
`;

export const FetchButton = styled.button`
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.baseBgraised};
  width: 100px;
  border: none;
  align-self: center;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.textColor};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.baseBgraised};
    background-color: ${({ theme }) => theme.textColor};
  }
`;
