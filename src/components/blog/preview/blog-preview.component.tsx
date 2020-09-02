import { Spinner } from '@/components/custom-spinner/custom-spinner.styles';
import { BLOG_PREVIEW_IMG_FALLBACK } from '@/src/config';
import { Blogpost } from '@/src/generated/graphql';
import { dateFormat } from '@/src/utils/dates';
import Link from 'next/link';
import ProgressiveImage from 'react-progressive-graceful-image';
import {
  BlogCreatedContainer,
  BlogCreatedIcon,
  BlogCreatedTime,
  BlogLabelContainer,
  BlogPostContainer,
  BlogPostExcerpt,
  BlogPostFooter,
  BlogPostIcon,
  BlogPostLabel,
  BlogPostTitle,
  BlogPreviewImage,
} from './blog-preview.styles';

const BlogPreview: React.FC<Blogpost> = ({
  title,
  excerpt,
  slug,
  type,
  previewImage,
  createdAt,
}) => {
  // If, for some reason, there is no preview image, fall back to a generic image
  const _prevImage: string = previewImage
    ? previewImage.url
    : BLOG_PREVIEW_IMG_FALLBACK.url;

  return (
    <Link href='/blog/[post_slug]' as={`/blog/${slug}`} passHref>
      <BlogPostContainer>
        <BlogPostTitle>{title}</BlogPostTitle>
        <ProgressiveImage src={_prevImage} placeholder=''>
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
