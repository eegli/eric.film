import React from 'react';
import { LayoutContainerStyle } from './layout.styles';

export type Props = {
  blog?: boolean;
};

const LayoutContainer: React.FC<Props> = ({ blog, children }) => {
  return <LayoutContainerStyle blog={blog}>{children}</LayoutContainerStyle>;
};

export default LayoutContainer;
