import { shallow } from 'enzyme';
import Blog from '../blog-category.component';

describe('<Blog />', () => {
  it('Blog category components', () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper).toMatchSnapshot();
  });
});
