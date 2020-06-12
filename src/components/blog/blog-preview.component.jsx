import React from 'react';
import Link from 'next/link';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
} from './blog-preview.styles';

const BlogPreview = ({ title, excerpt, slug, type }) => {
  let trimmedExc =
    excerpt.length > 120 ? excerpt.substring(0, 120).concat('...') : excerpt;
  return (
    <Link href='/blog/[post_slug]' as={`/blog/${slug}`}>
      <BlogPostContainer>
        <BlogPostTitle>{title}</BlogPostTitle>
        <BlogPostExcerpt>{trimmedExc}</BlogPostExcerpt>
        <BlogPostExcerpt>{type}</BlogPostExcerpt>
      </BlogPostContainer>
    </Link>
  );
};

export default BlogPreview;
