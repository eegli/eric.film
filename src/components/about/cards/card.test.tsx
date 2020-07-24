import { mountWithTheme } from '@/src/tests/testUtils';
import Card from './card.component';

describe('About', () => {
  it('renders card component', () => {
    const wrapper = mountWithTheme(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});
