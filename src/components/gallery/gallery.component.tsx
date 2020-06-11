import React from 'react';
import { GalleryContainer, Img, ImageRow, ImageCol } from './gallery.styles';
import { IndexProps } from '../../pages/index';

const Gallery: React.FC<IndexProps> = ({ images }) => {
  if (!images) {
    return <h1>Oh no! There was an error displaying images</h1>;
  }
  // How many colums
  const columsAmount = 4;
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
    <GalleryContainer>
      <ImageRow>
        {collArrays.map(imgCol => (
          <ImageCol key={Math.random()}>
            {imgCol.map(img => (
              <Img key={img.url} src={img.url} />
            ))}
          </ImageCol>
        ))}
      </ImageRow>
    </GalleryContainer>
  );
};

export default Gallery;
