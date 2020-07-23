import { shallow } from '@/src/tests/testUtils';
import { blogPostContent } from '@/src/tests/__mocks__';
import BlogContent from './blog-content.component';

describe('Blog', () => {
  it('renders content component', () => {
    const wrapper = shallow(<BlogContent {...blogPostContent} />);
    expect(wrapper).toMatchSnapshot();
  });
});
