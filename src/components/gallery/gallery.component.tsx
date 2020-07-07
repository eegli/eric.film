import React from 'react';
import { GalleryContainer, Image } from './gallery.styles';
import ProgressiveImage from 'react-progressive-graceful-image';
// The progressive image library needs a html element
import { Spinner } from '@/components/custom-spinner/custom-spinner.styles';
import { ImageUrl } from '@/components/types';

type ImageProps = {
  images: ImageUrl[];
  index: boolean;
};

const Gallery: React.FC<ImageProps> = ({ images, index }) => {
  // TODO better error handling
  if (!images) {
    return <h1>Oh no! There was an error displaying images</h1>;
  }

  return (
    <>
      <GalleryContainer index={index}>
        {images.map((img: ImageUrl) => (
          <div key={img.url}>
            <ProgressiveImage
              src={img.url}
              placeholder='/static/img/placeholder.jpg'>
              {(src: string, loading: boolean) => (
                <Image src={src} alt='portfolio-image' />
              )}
            </ProgressiveImage>
          </div>
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
