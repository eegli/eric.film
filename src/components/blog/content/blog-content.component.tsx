import { useLightTheme } from '@/components/hooks/useLightTheme';
import BlogMarkdown from '@/components/markdown/markdown.component';
import { BlogPostContent } from '@/components/types';
import { blogpost as mockPost } from '@/src/tests/mocks/blogpost';
import { dateFormat } from '@/src/utils/dates';
import { darkTheme, lightTheme } from '@/styles/theme/theme';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdAccessTime, MdUpdate } from 'react-icons/md';
import { ThemeProvider } from 'styled-components';
import {
  BlogPostContainer,
  BlogPostHeader,
  BlogPostTimes,
  BlogPostTitle,
  IFrameWrapper,
  StyledIframe,
  ThemeToggleButton,
} from './blog-content.styles';

const BlogContent: React.FC<BlogPostContent> = ({
  title,
  content,
  ytvideo,
  createdAt,
  updatedAt,
}) => {
  const [theme, themeToggler] = useLightTheme();
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

  let markdown: string;
  if (process.env.NODE_ENV !== 'production') {
    markdown = mockPost.content;
  } else {
    markdown = content;
  }

  return (
    <BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      <BlogPostHeader>
        <BlogPostTimes>
          <div>
            <MdAccessTime />
            <p>Posted: {dateFormat(createdAt)}</p>
          </div>
          {createdAt !== updatedAt ? (
            <div>
              <MdUpdate />
              <p>Updated: {dateFormat(updatedAt)}</p>
            </div>
          ) : null}
        </BlogPostTimes>
        <ThemeToggleButton onClick={themeToggler}>
          <div>
            <FaRegLightbulb />

            <p>
              Toggle {theme === 'lightTheme' ? 'dark' : 'bright'} reading mode
            </p>
          </div>
        </ThemeToggleButton>
      </BlogPostHeader>

      <ThemeProvider theme={themeMode}>
        <BlogMarkdown content={markdown} />
      </ThemeProvider>

      {ytvideo ? (
        <IFrameWrapper>
          <StyledIframe
            src={`https://www.youtube.com/embed/${ytvideo}`}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </IFrameWrapper>
      ) : null}
    </BlogPostContainer>
  );
};

export default BlogContent;
