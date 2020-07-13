import { Spinner } from '@/components/custom-spinner/custom-spinner.styles';
import { BlogPostPreview } from '@/components/types';
import Link from 'next/link';
import ProgressiveImage from 'react-progressive-graceful-image';
import { dateFormat } from 'src/utils/dates';
import { BLOG_PREVIEW_IMG_FALLBACK } from '../../../../config';
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
  const image = previewImage ? previewImage.url : BLOG_PREVIEW_IMG_FALLBACK.url;
  return (
    <Link href='/blog/[post_slug]' as={`/blog/${slug}`} passHref>
      <BlogPostContainer>
        <BlogPostTitle>{title}</BlogPostTitle>
        <ProgressiveImage src={image} placeholder=''>
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
