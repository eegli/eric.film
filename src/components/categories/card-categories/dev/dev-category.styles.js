import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  padding: 0 0.5rem;
  & th,
  td {
    text-align: left;
    /* border-bottom: 1px ${({ theme }) => theme.textSecondaryColor} solid; */

  }
  & th {
    width: 160px;
    font-weight: normal;
    color: ${({ theme }) => theme.textSecondaryColor};
   
    
  }
  & tr {
    height: 30px;
  }
  & td {

  }
`;
