import React from 'react';
import { ButtonContainer } from './button.styles';

const Button: React.FC<{}> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
