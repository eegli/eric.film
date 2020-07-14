import { shallow } from 'enzyme';
import Resume from '../resume.component';
import { ToggleContainer } from '../resume.styles';

describe('About - resume', () => {
  const wrapper = shallow(<Resume />);

  it('renders component', () => {
    expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.debug());
  });

  it('has 4 categories', () => {
    expect(wrapper.find('div')).toHaveLength(4);
  });

  it('has 2 containers that can be toggled', () => {
    expect(wrapper.find(ToggleContainer)).toHaveLength(2);
  });

  // it('can toggle both containers', () => {
  //   const test = wrapper.find(ToggleContainer).first().simulate('click');
  // });
});
