import { render } from '@/src/testUtils';
import Resume from '../resume.component';
// import { ToggleContainer } from '../resume.styles';

describe('About - resume', () => {
  it('renders component', () => {
    const { asFragment } = render(<Resume />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
