import { shallow } from '@/src/tests/testUtils';
import Resume from './resume.component';

describe('About', () => {
  it('renders resume component', () => {
    const wrapper = shallow(<Resume />);
    expect(wrapper).toMatchSnapshot();
  });
});
