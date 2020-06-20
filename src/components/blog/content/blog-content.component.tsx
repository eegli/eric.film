import React from 'react';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
  StyledMD,
} from './blog-content.styles';
import CodeBlock from '../custom-renders/blog-codeblock.component';
import Link from '../custom-renders/blog-link.component';
import { BlogPost } from '@/components/types';

const BlogContent: React.FC<BlogPost> = ({ title, excerpt, content }) => {
  return (
    <BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      <BlogPostExcerpt>{excerpt}</BlogPostExcerpt>
      <StyledMD
        renderers={{
          code: CodeBlock,
          link: Link,
        }}
        source={content}
      />
    </BlogPostContainer>
  );
};

export default BlogContent;