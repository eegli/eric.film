import React from 'react';
import {
  BlogPostContainer,
  BlogPostTitle,
  StyledIframe,
  IFrameWrapper,
  BlogPostTimes,
} from './blog-content.styles';
import BlogMarkdown from '../markdown/blog-markdown.component';
import { BlogPostContent } from '@/components/types';
import { dateFormat } from 'src/utils/dates';
import { MdAccessTime, MdUpdate } from 'react-icons/md';

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
      <BlogMarkdown source={content} />

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
