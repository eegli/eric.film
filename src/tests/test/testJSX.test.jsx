import { render } from '@/src/tests/testUtils';

const Page = () => <div>Test</div>;

describe('Test - JSX', () => {
  it('renders test JSX component', () => {
    const { asFragment } = render(<Page />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
