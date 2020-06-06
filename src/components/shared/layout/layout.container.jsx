import React from 'react';
import { LayoutContainerStyle } from './layout.styles';

const LayoutContainer = ({ children }) => {
  return <LayoutContainerStyle>{children}</LayoutContainerStyle>;
};

export default LayoutContainer;
