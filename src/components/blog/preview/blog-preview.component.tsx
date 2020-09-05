import { Blogpost } from '@/components/types';
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
  return (
    <Link href='/blog/[slug]' as={`/blog/${slug}`} passHref>
      <BlogPostContainer>
        <BlogPostTitle>{title}</BlogPostTitle>
        <ProgressiveImage
          src={previewImage.url}
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
