import { mountWithTheme } from '@/src/tests/testUtils';
import SocialBar from './social-bar.component';

describe('About', () => {
  it('renders social bar component', () => {
    const wrapper = mountWithTheme(<SocialBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
