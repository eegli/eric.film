import { Blogpost } from '@/components/types';
import { checkIfImageExists } from '@/src/utils/blog';
import { dateFormat } from '@/src/utils/dates';
import Link from 'next/link';
import ProgressiveImage from 'react-progressive-graceful-image';
import {
  CreatedContainer,
  CreatedIcon,
  CreatedTime,
  LabelContainer,
  PreviewContainer,
  PreviewExcerpt,
  PreviewFooter,
  PreviewIcon,
  PreviewImage,
  PreviewImageContainer,
  PreviewLabel,
  PreviewTextContainer,
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
  const _previewImage = checkIfImageExists({ image: previewImage, id });

  return (
    <Link href='/blog/[slug]' as={`/blog/${slug}`} passHref>
      <PreviewContainer>
        <PreviewImageContainer>
          <ProgressiveImage
            src={_previewImage.url}
            placeholder='/static/img/placeholder.jpg'>
            {(src: string) => <PreviewImage src={src} alt='blog-image' />}
          </ProgressiveImage>
        </PreviewImageContainer>

        <PreviewTextContainer>
          <PreviewTitle>{title}</PreviewTitle>
          <PreviewExcerpt>{excerpt}</PreviewExcerpt>
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
        </PreviewTextContainer>
      </PreviewContainer>
    </Link>
  );
};

export default BlogPreview;
