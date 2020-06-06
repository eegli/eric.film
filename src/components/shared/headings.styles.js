import styled, { css } from 'styled-components';

const sharedCSS = css`
  text-shadow: 1px 1px 0px #feb8ce;
  letter-spacing: 0.2rem;
`;

export const Sh1 = styled.h1`
  ${sharedCSS}
  font-weight: 400;
  text-align: center;
`;
