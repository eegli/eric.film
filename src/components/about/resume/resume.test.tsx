import { mountWithTheme } from '@/src/tests/testUtils';
import Resume from './resume.component';

describe('About', () => {
  it('renders resume component', () => {
    const wrapper = mountWithTheme(<Resume />);
    expect(wrapper).toMatchSnapshot();
  });
});
