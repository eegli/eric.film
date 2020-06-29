import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;

  & tr {
    height: 50px;

    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.textSecondaryColor};
      color: ${({ theme }) => theme.baseBgraised};
    }
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.baseBgraised};
      color: ${({ theme }) => theme.textSecondaryColor};
    }
  }
  & th {
    width: 160px;
    text-align: left;
    padding-left: 1rem;
  }
  & td {
    padding: 1rem;
  }
  margin-bottom: 3rem;
`;
