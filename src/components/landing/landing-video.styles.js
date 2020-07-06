import styled from 'styled-components';

export const LandingVideoContainer = styled.div`
  text-align: center;
`;
export const StyledVideo = styled.video`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
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
  background-color: ${({ theme }) => theme.textColor};
  & svg {
    color: ${({ theme }) => theme.baseBg};
  }
`;
