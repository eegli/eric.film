import styled from 'styled-components';

export const IndexVideoContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 4.2rem;
  left: 0;
  bottom: 0;
  /** could be any size **/
  width: 100%;
  overflow: hidden;
`;
export const IndexContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 100%;
`;
export const Svideo = styled.video`
  display: block;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const Simg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Siframe = styled.iframe`
  width: 500px;
`;
