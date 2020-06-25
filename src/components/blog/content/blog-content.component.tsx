import React from 'react';
import {
  BlogPostContainer,
  BlogPostTitle,
  StyledMD,
  StyledIframe,
  IFrameWrapper,
  BlogPostTimes,
} from './blog-content.styles';
import CodeBlock from '../custom-renders/blog-codeblock.component';
import Link from '../custom-renders/blog-link.component';
import Image from '../custom-renders/blog-image.component';
import { BlogPostContent } from '@/components/types';
import { dateFormat } from 'src/utils/dates';
import { MdAccessTime, MdUpdate } from 'react-icons/md';
import MD from '../__mocks__/content.md';

const BlogContent: React.FC<BlogPostContent> = ({
  title,
  content,
  ytvideo,
  createdAt,
  updatedAt,
}) => {
  const source = process.env.NODE_ENV === 'production' ? content : MD;
  const video =
    process.env.NODE_ENV === 'production' ? ytvideo : '/VjSE0--1KNA';
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

      <StyledMD
        renderers={{
          code: CodeBlock,
          link: Link,
          image: Image,
        }}
        source={source}
      />
      {video ? (
        <IFrameWrapper>
          <StyledIframe
            src={`https://www.youtube.com/embed/${video}`}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </IFrameWrapper>
      ) : null}
    </BlogPostContainer>
  );
};

export default BlogContent;
