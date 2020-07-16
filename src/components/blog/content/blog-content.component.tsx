import { BlogPostContent } from '@/components/types';
import { lightTheme } from '@/src/styles/theme';
import { dateFormat } from '@/src/utils/dates';
import { MdAccessTime, MdUpdate } from 'react-icons/md';
import { ThemeProvider } from 'styled-components';
import BlogMarkdown from '../markdown/blog-markdown.component';
import {
  BlogPostContainer,
  BlogPostTimes,
  BlogPostTitle,
  IFrameWrapper,
  StyledIframe,
} from './blog-content.styles';

const BlogContent: React.FC<BlogPostContent> = ({
  title,
  content,
  ytvideo,
  createdAt,
  updatedAt,
}) => {
  // const source = process.env.NODE_ENV === 'production' ? content : MD;
  // const video =
  //   process.env.NODE_ENV === 'production' ? ytvideo : '/VjSE0--1KNA';
  return (
    <BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
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
      <ThemeProvider theme={lightTheme}>
        <BlogMarkdown source={content} />
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
