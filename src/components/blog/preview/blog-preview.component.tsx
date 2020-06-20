import React from 'react';
import Link from 'next/link';
import {
  BlogPostContainer,
  BlogPostFooter,
  BlogCreatedTime,
  BlogPostTitle,
  BlogPostExcerpt,
  BlogPreviewImage,
  BlogPostLabel,
  BlogLabelContainer,
  BlogPostIcon,
  BlogCreatedContainer,
  BlogCreatedIcon,
} from './blog-preview.styles';
import ProgressiveImage from 'react-progressive-graceful-image';
import { Spinner } from '@/components/custom-spinner/custom-spinner.styles';
import { dateFormat } from '@/shared/util/dates';
import { BlogPost } from '@/components/types';

const BlogPreview: React.FC<BlogPost> = ({
  title,
  excerpt,
  slug,
  type,
  previewImage,
  createdAt,
}) => {
  let trimmedExc =
    excerpt.length > 120 ? excerpt.substring(0, 120).concat('...') : excerpt;

  return (
    <>
      <BlogPostContainer>
        <Link href='/blog/[post_slug]' as={`/blog/${slug}`}>
          <>
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
          </>
        </Link>
        <BlogPostFooter>
          <BlogCreatedContainer>
            <BlogCreatedIcon />
            <BlogCreatedTime>{dateFormat(createdAt)}</BlogCreatedTime>
          </BlogCreatedContainer>

          <BlogLabelContainer type={type}>
            <BlogPostLabel>{type}</BlogPostLabel>
            <BlogPostIcon />
          </BlogLabelContainer>
        </BlogPostFooter>
      </BlogPostContainer>
    </>
  );
};

export default BlogPreview;
