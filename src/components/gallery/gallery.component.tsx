import React from 'react';
import { GalleryContainer, Img, ImageRow, ImageCol } from './gallery.styles';
import ProgressiveImage from 'react-progressive-graceful-image';
// The progressive image library needs a html element
import { Spinner } from '@/components/custom-spinner/custom-spinner.styles';
import { ImageUrl } from '@/components/types';

type ImageProps = {
  images: ImageUrl[];
};

const Gallery: React.FC<ImageProps> = ({ images }) => {
  // TODO better error handling
  if (!images) {
    return <h1>Oh no! There was an error displaying images</h1>;
  }
  // How many colums
  const columsAmount = 3;
  // How many images
  const imgLen = images.length;
  // Images per colum
  const imgPerColum = Math.ceil(imgLen / columsAmount);

  let collArrays = [];
  // Create an array for each column
  for (let col = 0; col < imgPerColum; col++) {
    collArrays.push(
      images.slice(imgPerColum * col, imgPerColum * col + imgPerColum)
    );
  }

  return (
    <>
      <GalleryContainer>
        <ImageRow>
          {collArrays.map(imgCol => (
            <ImageCol key={Math.random()}>
              {imgCol.map((img: ImageUrl) => (
                <div key={img.url}>
                  <ProgressiveImage src={img.url} placeholder=''>
                    {(src: string, loading: boolean) => {
                      return loading ? (
                        <Spinner />
                      ) : (
                        <Img src={src} alt='portfolio-image' />
                      );
                    }}
                  </ProgressiveImage>
                </div>
              ))}
            </ImageCol>
          ))}
        </ImageRow>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
