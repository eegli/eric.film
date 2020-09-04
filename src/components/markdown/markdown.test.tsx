import { blogpost } from '@/src/tests/mocks/blogpost';
import { mountWithTheme } from '@/src/tests/testUtils';
import Markdown from './markdown.component';

describe('Markdown', () => {
  it('renders markdown content', () => {
    const wrapper = mountWithTheme(<Markdown content={blogpost.content} />);
    expect(wrapper).toMatchSnapshot();
  });
});
