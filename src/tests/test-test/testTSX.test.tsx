import { render } from '@/src/tests/testUtils';
import Page from './testTSX';

describe('Test - JSX', () => {
  it('renders test JSX component', () => {
    const { asFragment } = render(<Page />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
