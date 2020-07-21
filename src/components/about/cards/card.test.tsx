import { render } from '@/src/tests/testUtils';
import Card from './card.component';

describe('About - card', () => {
  it('renders card component', () => {
    const { asFragment } = render(<Card />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
