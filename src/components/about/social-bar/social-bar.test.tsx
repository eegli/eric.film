import { render } from '@/src/tests/testUtils';
import SocialBar from './social-bar.component';

describe('About', () => {
  it('renders social bar component', () => {
    const { asFragment } = render(<SocialBar />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
