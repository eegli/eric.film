import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  z-index: -99;
`;

export const StyledVideo = styled.video`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  top: 0px;
  left: 0px;
  object-fit: cover;
`;

export const ArrowDownContainer = styled.div`
  opacity: 0.3;
  position: fixed;
  bottom: 2rem;
  left: 47%;
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
