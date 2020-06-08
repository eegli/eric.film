import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.baseTextLightWhite};
  text-decoration: underline;
`;
