import React from 'react';
import Link from 'next/link';
import {
  BlogPostContainer,
  BlogPostTitle,
  BlogPostExcerpt,
  BlogPreviewImage,
} from './blog-preview.styles';
import ProgressiveImage from 'react-progressive-graceful-image';
import { Spinner } from '@/components/custom-spinner/custom-spinner.styles';

import { BlogPost } from '@/components/types';

const BlogPreview: React.FC<BlogPost> = ({
  title,
  excerpt,
  slug,
  type,
  previewImage,
}) => {
  let trimmedExc =
    excerpt.length > 120 ? excerpt.substring(0, 120).concat('...') : excerpt;
  return (
    <Link href='/blog/[post_slug]' as={`/blog/${slug}`}>
      <BlogPostContainer>
        <BlogPostTitle>{title}</BlogPostTitle>
        <ProgressiveImage src={previewImage.url} placeholder=''>
          {(src: string, loading: boolean) => {
            return loading ? (
              <Spinner />
            ) : (
              <BlogPreviewImage src={src} alt='portfolio-image' />
            );
          }}
        </ProgressiveImage>
        <BlogPostExcerpt>{trimmedExc}</BlogPostExcerpt>
        <BlogPostExcerpt>{type}</BlogPostExcerpt>
      </BlogPostContainer>
    </Link>
  );
};

export default BlogPreview;
