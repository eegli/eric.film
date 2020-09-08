import { shallow } from '@/src/tests/testUtils';
import Footer from './footer.component';

describe('About', () => {
  it('renders card component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
