import { darkTheme } from '@/src/styles/theme';
import { mount } from 'enzyme';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

export const mountWithTheme = ({ children }) => {
  return mount(<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>);
};

export { shallow } from 'enzyme';
