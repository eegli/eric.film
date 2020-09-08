import { LayoutContainerStyle } from './layout.styles';

// TODO LARGE | MEDIUM | SMALL

export type Props = {
  width?: 'large' | 'medium' | 'small' | 'xsmall';
};

const LayoutContainer: React.FC<Props> = ({ width, children }) => {
  return <LayoutContainerStyle width={width}>{children}</LayoutContainerStyle>;
};

export default LayoutContainer;
