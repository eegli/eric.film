import { shallow } from '@/src/tests/testUtils';

const Page: React.FC = () => <div>Test</div>;

describe('Test - TSX', () => {
  it('renders test TSX component', () => {
    const wrapper = shallow(<Page />);
    expect(shallow).toMatchSnapshot();
  });
});
