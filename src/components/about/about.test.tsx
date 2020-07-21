import { render } from '@/src/tests/testUtils';
import About from './about.component';

describe('About - container', () => {
  it('renders about container', () => {
    const { asFragment } = render(<About />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
