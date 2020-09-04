import styled from 'styled-components';

export const MovingCategoryContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const IframeWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  margin-bottom: 1rem;
  &:first-child {
    margin-top: 1rem;
  }
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
