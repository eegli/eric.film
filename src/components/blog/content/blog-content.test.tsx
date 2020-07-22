import { render } from '@/src/tests/testUtils';
import { blogPostContent } from '@/src/tests/__mocks__';
import BlogContent from './blog-content.component';

describe('Blog', () => {
  it('renders content component', () => {
    const { asFragment } = render(<BlogContent {...blogPostContent} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
