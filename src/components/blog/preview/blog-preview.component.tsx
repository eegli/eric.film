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
import { dateFormat } from 'src/utils/dates';
import { BlogPostPreview } from '@/components/types';

const BlogPreview: React.FC<BlogPostPreview> = ({
  title,
  excerpt,
  slug,
  type,
  previewImage,
  createdAt,
}) => {
  // let trimmedExc =
  //   excerpt.length > 120 ? excerpt.substring(0, 120).concat('...') : excerpt;

  return (
    <Link href='/blog/[post_slug]' as={`/blog/${slug}`} passHref>
      <BlogPostContainer>
        <BlogPostTitle>{title}</BlogPostTitle>
        <ProgressiveImage src={previewImage.url} placeholder=''>
          {(src: string, loading: boolean) => {
            return loading ? (
              <Spinner />
            ) : (
              <BlogPreviewImage src={src} alt='blog-image' />
            );
          }}
        </ProgressiveImage>
        <BlogPostExcerpt>{excerpt}</BlogPostExcerpt>

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
    </Link>
  );
};

export default BlogPreview;
