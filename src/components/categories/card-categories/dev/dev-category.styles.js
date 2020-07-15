import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimaryColor};

  & tr {
    height: 50px;

    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.baseBgraised};
    }
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.baseBgraised_3};
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
