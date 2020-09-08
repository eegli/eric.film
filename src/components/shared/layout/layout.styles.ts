import styled from 'styled-components';
import { Props } from './layout.container';

const widthLarge = '1200px';
const widthMedium = '960px';
const widthSmall = '860px';
const widthXSmall = '700px';

export const LayoutContainerStyle = styled.div<Props>`
  position: relative;
  top: 4rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ width }) =>
    width === 'large'
      ? widthLarge
      : width === 'medium'
      ? widthMedium
      : width === 'small'
      ? widthSmall
      : width === 'xsmall'
      ? widthXSmall
      : widthMedium};
`;
