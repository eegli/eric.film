import styled from 'styled-components';

import { Props } from './layout.container';

export const LayoutContainerStyle = styled.div<Props>`
  position: relative;
  top: 4rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ page }) =>
    page === 'blog' ? '860px' : page === 'about' ? '1200px' : '1024px'};
`;
