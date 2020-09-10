// The progressive image library needs a html element
import ErrorMessage from '@/components/error-message/error-message.component';
import { getWebpUrl } from '@/src/utils/blog';
import { useMemo } from 'react';
import { GalleryContainer, Image } from './gallery.styles';

export type GalleryProps = {
  images: Array<{ url: string; id: string }>;
  layout?: 'grid';
};

const Gallery: React.FC<GalleryProps> = ({ images, layout }) => {
  const newImages = useMemo(() => getWebpUrl(images), [images]);
  if (!images) {
    return <ErrorMessage>There was an error displaying images</ErrorMessage>;
  }

  return (
    <>
      <GalleryContainer layout={layout}>
        {newImages.map(img => (
          <div key={img.url}>
            <Image>
              <source srcSet={img.webp_url} type='image/webp' />
              <source srcSet={img.url} type='image/jpg' />
              <img src={img.url} alt='portfolio-image' />
            </Image>
          </div>
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
