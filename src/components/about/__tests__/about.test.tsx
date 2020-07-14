import { shallow } from 'enzyme';
import About from '../about.component';

describe('About page', () => {
  it('renders about page', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.debug());
  });
});
