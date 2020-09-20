import { Blogpost } from '@/components/types';
import { FALLBACK_IMG } from '@/src/config';
import { dateFormat } from '@/src/utils/dates';
import Link from 'next/link';
import ProgressiveImage from 'react-progressive-graceful-image';
import {
  CreatedContainer,
  CreatedIcon,
  CreatedTime,
  LabelContainer,
  PreviewContainer,
  PreviewContent,
  PreviewExcerpt,
  PreviewFooter,
  PreviewIcon,
  PreviewImage,
  PreviewLabel,
  PreviewTitle,
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
  const _previewImage = previewImage || FALLBACK_IMG;

  return (
    <Link href='/blog/[slug]' as={`/blog/${slug}`}>
      <a>
        <PreviewContainer>
          <ProgressiveImage
            src={_previewImage.url}
            placeholder='/static/img/placeholder.jpg'>
            {(src: string) => <PreviewImage src={src} alt='blog-image' />}
          </ProgressiveImage>

          <PreviewContent>
            <PreviewTitle>
              <span>{title}</span>
            </PreviewTitle>
            <PreviewExcerpt>
              <span>{excerpt}</span>
            </PreviewExcerpt>
            <PreviewFooter>
              <CreatedContainer>
                <CreatedIcon />
                <CreatedTime>{dateFormat(createdAt)}</CreatedTime>
              </CreatedContainer>

              <LabelContainer type={type}>
                <PreviewLabel>{type}</PreviewLabel>
                <PreviewIcon />
              </LabelContainer>
            </PreviewFooter>
          </PreviewContent>
        </PreviewContainer>
      </a>
    </Link>
  );
};

export default BlogPreview;
