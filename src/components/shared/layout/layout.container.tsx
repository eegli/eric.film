import { Breakpoints } from '@/src/styles';
import { LayoutContainerStyle } from './layout.styles';

export type Props = {
  pageBreakpoint: keyof typeof Breakpoints;
};

const LayoutContainer: React.FC<Props> = ({ pageBreakpoint, children }) => {
  return (
    <LayoutContainerStyle pageBreakpoint={pageBreakpoint}>
      {children}
    </LayoutContainerStyle>
  );
};

export default LayoutContainer;
