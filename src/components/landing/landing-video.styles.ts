import styled from 'styled-components';

export const LandingVideoContainer = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;
export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export const ArrowDownContainer = styled.div`
  opacity: 0.3;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.baseTextLightWhite};
  & svg {
    color: ${({ theme }) => theme.baseBgChromeGrey};
  }
`;
