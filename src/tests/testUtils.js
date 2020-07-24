import { darkTheme } from '@/src/styles/theme';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export const mountWithTheme = node => {
  return mount(<ThemeProvider theme={darkTheme}>{node}</ThemeProvider>);
};

export { shallow } from 'enzyme';
