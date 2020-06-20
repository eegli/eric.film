import React from 'react';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
  StyledMD,
} from './blog-content.styles';
import CodeBlock from '../custom-renders/blog-codeblock.component';
import Link from '../custom-renders/blog-link.component';

const BlogContent = props => {
  console.log(props);
  return (
    <BlogPostContainer>
      <BlogPostTitle>{props.title}</BlogPostTitle>
      <BlogPostExcerpt>{props.excerpt}</BlogPostExcerpt>
      <StyledMD
        renderers={{
          code: CodeBlock,
          link: Link,
        }}
        source={props.content}
      />
    </BlogPostContainer>
  );
};

export default BlogContent;
