import { Breakpoints } from '@/src/styles';
import { LayoutContainerStyle } from './layout.styles';

// Breakpoints can be used in two way: For media queries in styled components
// and as a page layout when passed as a prop to LayoutContainer.
// Layoutcontainer accepts all the members of the Breakpoints enum.

export type Props = {
  breakpoint: keyof typeof Breakpoints;
};

const LayoutContainer: React.FC<Props> = ({ breakpoint, children }) => {
  return (
    <LayoutContainerStyle breakpoint={breakpoint}>
      {children}
    </LayoutContainerStyle>
  );
};

export default LayoutContainer;
