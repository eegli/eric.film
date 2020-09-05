import styled from 'styled-components';

export const ArrowDownWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2rem;
  display: flex;
  justify-content: center;
`;
export const ArrowDown = styled.div`
  opacity: 0.3;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  & svg {
    color: ${({ theme }) => theme.colors.bgPrimary};
  }
  &:hover {
    cursor: pointer;
  }
`;
