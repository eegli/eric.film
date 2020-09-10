// The progressive image library needs a html element
import { getWebpUrl } from '@/src/utils/blog';
import { useMemo } from 'react';
import { GalleryContainer, Image } from './gallery.styles';

export type GalleryProps = {
  images: Array<{ url: string; id: string }>;
  layout?: 'grid';
};

const Gallery: React.FC<GalleryProps> = ({ images, layout }) => {
  const enrichedImages = useMemo(() => getWebpUrl(images), [images]);

  return (
    <>
      <GalleryContainer layout={layout}>
        {enrichedImages.map(img => (
          <div key={img.url}>
            <picture>
              <source srcSet={img.webp_url} type='image/webp' />
              <source srcSet={img.url} type='image/jpg' />
              <Image src={img.url} alt='portfolio-image' />
            </picture>
          </div>
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
