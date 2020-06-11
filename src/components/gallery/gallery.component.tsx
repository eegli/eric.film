import React from 'react';
import { GalleryContainer, Img, ImageRow, ImageCol } from './gallery.styles';
import { IndexProps } from '../../pages/index';

const Gallery: React.FC<IndexProps> = ({ images }) => {
  // How many colums
  const columsAmount = 3;
  // How many images
  const imgLen = images.length;
  // Images per colum
  const imgPerColum = Math.ceil(imgLen / columsAmount);
  console.log(imgPerColum);

  let collArrays: any[] = [];
  // Create an array for each column
  for (let col = 0; col < imgPerColum + 1; col++) {
    collArrays.push(
      images.slice(imgPerColum * col, imgPerColum * col + imgPerColum)
    );
  }

  console.log(collArrays);

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
