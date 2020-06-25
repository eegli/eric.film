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

const BlogContent: React.FC<BlogPostContent> = ({
  title,
  content,
  ytvideo,
  createdAt,
  updatedAt,
}) => {
  const temp = 'December 10, 1995 03:24:00';
  console.log(dateFormat(temp));
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
        source={content}
      />
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
