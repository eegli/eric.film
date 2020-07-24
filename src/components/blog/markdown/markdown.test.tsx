import { MARKDOWN } from '@/src/tests/mocks';
import { mountWithTheme } from '@/src/tests/testUtils';
import Markdown from './markdown.component';

describe('Markdown', () => {
  it('renders markdown content', () => {
    const wrapper = mountWithTheme(<Markdown content={MARKDOWN} />);
    expect(wrapper).toMatchSnapshot();
  });
});
