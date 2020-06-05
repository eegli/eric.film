import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
  BlogPostContent,
} from './md-preview.styles';
import CodeBlock from './codeblock';

const MdPreview = ({ title, excerpt, content }) => {
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

export default MdPreview;
