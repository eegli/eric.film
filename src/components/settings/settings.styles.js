import styled from 'styled-components';

export const InfoContainer = styled.div`
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  &:first-child {
    margin: 1rem 0;
  }
  &:last-child {
    margin: 1rem 0;
  }
`;
