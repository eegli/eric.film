import { Breakpoints } from '@/src/styles';
import styled from 'styled-components';
import { Props } from './layout.container';

// Breakpoints can be used in two way: For media queries in styled components
// and as a page layout when passed as a prop to LayoutContainer. Here's where
// the matching happens.

// If a size doesn't exist, the compiler will throw a warning in the switch
// statement, such as Type '"fake size"' is not comparable to type '"small" |
// "tiny" | "medium" | "large"'. These are defined in the style globals as an enum.

export const LayoutContainerStyle = styled.div<Props>`
  position: relative;
  top: 4rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: ${({ pageBreakpoint }) => {
    switch (pageBreakpoint) {
      case 'tiny':
        return Breakpoints.tiny;
      case 'small':
        return Breakpoints.small;
      case 'medium':
        return Breakpoints.medium;
      case 'large':
        return Breakpoints.large;
      default:
        return Breakpoints.medium;
    }
  }};
`;
