import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
  BlogPostContent,
} from './blog-content.styles';
import { CodeBlock } from './custom-renders/index';

const BlogContent = ({ title, excerpt, content }) => {
  return (
    <BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      <BlogPostExcerpt>{excerpt}</BlogPostExcerpt>
      <BlogPostContent>
        <ReactMarkdown
          source={content}
          renderers={{
            code: CodeBlock,
          }}
        />
      </BlogPostContent>
    </BlogPostContainer>
  );
};

export default BlogContent;
