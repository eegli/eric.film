import { render } from '@/src/tests/testUtils';
import { blogPostContent } from '@/src/tests/__mocks__';
import Markdown from './markdown.component';

describe('Markdown', () => {
  it('renders markdown content', () => {
    const { asFragment } = render(<Markdown {...blogPostContent} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
