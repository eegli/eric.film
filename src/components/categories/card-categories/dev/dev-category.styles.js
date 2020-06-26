import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  overflow-x: scroll;
  padding: 0 0.5rem;
  & th,
  td {
    text-align: left;
  }
  & th {
    width: 160px;
  }
  & tr {
    height: 30px;
  }
`;
