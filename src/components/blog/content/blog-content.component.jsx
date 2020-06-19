import React from 'react';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
  StyledMD,
} from './blog-content.styles';
import CodeBlock from '../custom-renders/blog-codeblock.component';

const BlogContent = ({ title, excerpt, content }) => {
  return (
    <BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      <BlogPostExcerpt>{excerpt}</BlogPostExcerpt>
      <StyledMD
        renderers={{
          code: CodeBlock,
        }}
        source={content}
      />
    </BlogPostContainer>
  );
};

export default BlogContent;
