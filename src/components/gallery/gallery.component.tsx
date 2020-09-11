// The progressive image library needs a html element
import { JpegImageObj } from '@/components/types';
import { makeWebpFromGraphCMSImages } from '@/src/utils/blog';
import { useMemo } from 'react';
import { GalleryContainer, Image } from './gallery.styles';

export type GalleryProps = {
  images: JpegImageObj[];
  layout?: 'grid';
};

const Gallery: React.FC<GalleryProps> = ({ images, layout }) => {
  // This function returns enriched image data with a webp url
  const enrichedImages = useMemo(() => makeWebpFromGraphCMSImages(images), [
    images,
  ]);

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
