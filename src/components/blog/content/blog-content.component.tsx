import React from 'react';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
  StyledMD,
  StyledIframe,
  IFrameWrapper,
} from './blog-content.styles';
import CodeBlock from '../custom-renders/blog-codeblock.component';
import Link from '../custom-renders/blog-link.component';
import Image from '../custom-renders/blog-image.component';
import { BlogPostContent } from '@/components/types';

const BlogContent: React.FC<BlogPostContent> = ({
  title,
  content,
  ytvideo,
}) => {
  return (
    <BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      {/* <BlogPostExcerpt>{excerpt}</BlogPostExcerpt> */}
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
