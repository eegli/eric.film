import { shallow } from '@/src/tests/testUtils';

const Page = () => <div>Test</div>;

describe('Test - JSX', () => {
  it('renders test JSX component', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper).toMatchSnapshot();
  });
});
