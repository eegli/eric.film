import styled, { css } from 'styled-components';

const sharedTextCSS = css``;

export const Sh1 = styled.h1`
  ${sharedTextCSS}
  text-shadow: 2px 2px 0px #feb8ce;
  letter-spacing: 0.2rem;
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  display: inline;
`;

export const Sh3 = styled.h3`
  ${sharedTextCSS}
  letter-spacing: 0.1rem;
  font-weight: 200;
  line-height: 2rem;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;
