import React from 'react';
import Markdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostContent,
} from './md-preview.styles';
import CodeBlock from './codeblock';

const MdPreview = ({ title, excerpt, content }) => {
  return (
    <BlogPostContainer>
      <ReactMarkdown
        source={content}
        renderers={{
          code: CodeBlock,
        }}
      />
    </BlogPostContainer>
  );
};

export default MdPreview;
