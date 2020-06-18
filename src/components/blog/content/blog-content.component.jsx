import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
} from './blog-content.styles';
import { CodeBlock, Text } from '../custom-renders/index';

const BlogContent = ({ title, excerpt, content }) => {
  return (
    <BlogPostContainer>
      <BlogPostTitle>{title}</BlogPostTitle>
      <BlogPostExcerpt>{excerpt}</BlogPostExcerpt>
      <div>
        <ReactMarkdown
          source={content}
          renderers={{
            code: CodeBlock,
            text: Text,
          }}
        />
      </div>
    </BlogPostContainer>
  );
};

export default BlogContent;
