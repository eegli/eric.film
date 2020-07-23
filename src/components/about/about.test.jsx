import { shallow } from '@/src/tests/testUtils';
import About from './about.component';

describe('About', () => {
  it('renders shallow wrapper', () => {
    const shallowWrapper = shallow(<About />);
    expect(shallowWrapper).toMatchSnapshot();
  });
});
