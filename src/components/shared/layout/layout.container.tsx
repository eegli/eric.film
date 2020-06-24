import React from 'react';
import { LayoutContainerStyle } from './layout.styles';

export type Props = {
  page?: 'blog' | 'about';
};

const LayoutContainer: React.FC<Props> = ({ page, children }) => {
  return <LayoutContainerStyle page={page}>{children}</LayoutContainerStyle>;
};

export default LayoutContainer;
