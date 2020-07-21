import { render } from '@/src/tests/testUtils';
import Resume from './resume.component';

describe('About - resume', () => {
  it('renders resume component', () => {
    const { asFragment } = render(<Resume />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
