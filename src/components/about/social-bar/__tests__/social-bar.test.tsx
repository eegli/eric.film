import { shallow } from 'enzyme';
import SocialBar from '../social-bar.component';

describe('About - social bar', () => {
  it('renders component', () => {
    const wrapper = shallow(<SocialBar />);
    expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.debug());
  });
});
