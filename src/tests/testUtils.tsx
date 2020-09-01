import { dark } from '@/styles/index';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export const mountWithTheme = (node: React.ReactNode) => {
  return mount(<ThemeProvider theme={dark}> {node} </ThemeProvider>);
};

export { shallow } from 'enzyme';
