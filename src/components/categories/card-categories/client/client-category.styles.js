import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Client = styled.a`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  & > img {
    max-width: 150px;
  }
`;
