import React from 'react';
import Link from 'next/link';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
} from './md-preview.styles';

const MdPreview = ({ title, excerpt, slug }) => {
  return (
    <Link href='/blog/[post_slug]' as={`/blog/${slug}`}>
      <BlogPostContainer>
        <BlogPostTitle>{title}</BlogPostTitle>
        <BlogPostExcerpt>{excerpt}</BlogPostExcerpt>
      </BlogPostContainer>
    </Link>
  );
};

export default MdPreview;
