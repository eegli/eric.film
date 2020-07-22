import { render } from '@/src/tests/testUtils';

const Page: React.FC = () => <div>Test</div>;

describe('Test - TSX', () => {
  it('renders test TSX component', () => {
    const { asFragment } = render(<Page />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
