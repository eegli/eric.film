import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;
export const StyledVideo = styled.video`
  display: relative;
  width: 100%;
  height: 100vh;
  right: 0;
  top: 0;
  object-fit: cover;
`;

export const ArrowDownContainer = styled.div`
  opacity: 0.3;
  position: relative;
  bottom: 6rem;
  margin: 0 auto;
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
`;
