import { shallow } from '@/src/tests/testUtils';
import Resume from './resume.component';

describe('About', () => {
  it('renders about component', () => {
    const shallowWrapper = shallow(<Resume />);
    expect(shallowWrapper).toMatchSnapshot();
  });
});
