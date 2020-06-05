import React from 'react';
import Link from 'next/link';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
} from './md-preview.styles';

const MdPreview = ({ title, excerpt, id }) => {
  console.log(id);
  return (
    <Link href='/blog/[post_id]' as={`/blog/${id}`}>
      <BlogPostContainer>
        <BlogPostTitle>{title}</BlogPostTitle>
        <BlogPostExcerpt>{excerpt}</BlogPostExcerpt>
      </BlogPostContainer>
    </Link>
  );
};

export default MdPreview;
