import styled from 'styled-components';
import { Props } from './layout.container';

export const LayoutContainerStyle = styled.div<Props>`
  position: relative;
  top: 4rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow-x: hidden;
  max-width: ${({ breakpoint, theme }) => theme.breakpoints[breakpoint]};
`;
