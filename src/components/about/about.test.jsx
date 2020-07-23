import { mountWithTheme, shallow } from '@/src/tests/testUtils';
import About from './about.component';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/src/styles/theme';

describe('About', () => {
  it('snapshots shallow wrapper', () => {
    const shallowWrapper = shallow(<About />);
    expect(shallowWrapper).toMatchSnapshot();
  });
  it('snapshots mounted wrapper', () => {
    const mountedWrapper = mountWithTheme(<About />);
    expect(mountedWrapper).toMatchSnapshot();
  });
});
