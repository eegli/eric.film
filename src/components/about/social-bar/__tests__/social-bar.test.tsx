import { shallow } from 'enzyme';
import SocialBar from '../social-bar.component';

describe('About', () => {
  it('Renders social bar component', () => {
    const wrapper = shallow(<SocialBar />);
    expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.debug());
  });
});
