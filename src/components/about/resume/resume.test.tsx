import { mountWithTheme, shallow } from '@/src/tests/testUtils';
import SmoothCollapse from 'react-smooth-collapse';
import Resume from './resume.component';
import { ToggleContainer } from './resume.styles';

describe('About', () => {
  const mountedWrapper = mountWithTheme(<Resume />);
  const shallowWrapper = shallow(<Resume />);

  it('renders resume component', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('toggles education div', () => {
    const toggler = shallowWrapper.find(ToggleContainer).at(0);
    const collapse = shallowWrapper.find(SmoothCollapse).at(0);
    // console.log(toggler.debug());

    expect(collapse.prop('expanded')).toBeFalsy;
  });
});
