import { fireEvent, render } from '@/src/tests/testUtils';
import Resume from './resume.component';

describe('About', () => {
  it('renders resume component', () => {
    const { asFragment } = render(<Resume />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('opens education, work on click', () => {
    const { asFragment, getByText } = render(<Resume />);
    fireEvent.click(getByText('education - work'));
    expect(asFragment()).toMatchSnapshot();
  });

  it('opens tools, technology on click', () => {
    const { asFragment, getByText } = render(<Resume />);
    fireEvent.click(getByText('tools - technology'));
    expect(asFragment()).toMatchSnapshot();
  });
});
