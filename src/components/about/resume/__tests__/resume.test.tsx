import { mountWithTheme, shallowWithTheme } from '@/src/styledTest';
import Resume from '../resume.component';
import { ToggleContainer } from '../resume.styles';

describe('About - resume', () => {
  const mountWrapper = mountWithTheme(<Resume />);
  const shallowWrapper = shallowWithTheme(<Resume />);

  it('renders component', () => {
    expect(mountWrapper).toMatchSnapshot();
    // console.log(wrapper.debug());
  });

  it('has 4 categories', () => {
    expect(shallowWrapper.find('div')).toHaveLength(4);
  });

  it('has 2 containers that can be toggled', () => {
    expect(shallowWrapper.find(ToggleContainer)).toHaveLength(2);
  });
});
