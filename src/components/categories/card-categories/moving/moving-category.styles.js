import styled from 'styled-components';

export const MovingCategoryContainer = styled.div`
  width: 80%;
  text-align: center;
`;

export const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  max-width: 560px;
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
