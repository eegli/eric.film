import { Blogpost } from '@/components/types';
import { FALLBACK_IMG } from '@/src/config';
import { checkPreviewImage } from '@/src/utils/blogUtils';
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
  id,
}) => {
  const actualPreviewImage = checkPreviewImage(previewImage, id, FALLBACK_IMG);

  return (
    <Link href='/blog/[slug]' as={`/blog/${slug}`} passHref>
      <BlogPostContainer>
        <BlogPostTitle>{title}</BlogPostTitle>
        <ProgressiveImage
          src={actualPreviewImage.url}
          placeholder='/static/img/placeholder.jpg'>
          {(src: string) => <BlogPreviewImage src={src} alt='blog-image' />}
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
