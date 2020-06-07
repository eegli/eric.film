import styled from 'styled-components';

export const LandingVideoContainer = styled.div`
  position: absolute;
  top: 4.2rem;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;
export const LandingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 100%;
`;

export const ArrowDownContainer = styled.div`
  opacity: 0.6;
  position: absolute;
  bottom: 2rem;
  z-index: 999;
  left: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
