import styled from 'styled-components';

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
