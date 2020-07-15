import { render } from '@/src/tests/testUtils';
import Resume from '../resume.component';
// import { ToggleContainer } from '../resume.styles';

describe('About - resume', () => {
  it('renders resume component', () => {
    const { asFragment } = render(<Resume />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
