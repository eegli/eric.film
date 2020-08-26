import { shallow } from '@/src/tests/testUtils';

const Page: React.FC = () => <div>Test</div>;

describe('Test - TSX', () => {
  it('renders test TSX component', () => {
    expect(shallow).toMatchSnapshot();
  });
});
