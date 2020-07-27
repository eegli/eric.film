import { useLightTheme } from '@/components/hooks/useLightTheme';
import { BlogPostContent } from '@/components/types';
import { darkTheme, lightTheme } from '@/src/styles/theme';
import { dateFormat } from '@/src/utils/dates';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdAccessTime, MdUpdate } from 'react-icons/md';
import { ThemeProvider } from 'styled-components';
import BlogMarkdown from '../markdown/markdown.component';
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
        <BlogMarkdown content={content} />
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
