import { render } from '@/src/tests/testUtils';
import LandingContent from '../landing-content.component';

describe('About - resume', () => {
  it('renders resume component', () => {
    const { asFragment } = render(<LandingContent />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
