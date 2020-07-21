import { render } from '@/src/tests/testUtils';
import SocialBar from './social-bar.component';

describe('About - social bar', () => {
  it('renders social bar component', () => {
    const { asFragment } = render(<SocialBar />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
