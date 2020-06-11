import React from 'react';
import { GalleryContainer, GalleryImg } from './gallery.styles';
import { IndexProps } from '../../pages/index';

const Gallery: React.FC<IndexProps> = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map(e => (
        <GalleryImg key={e.url} src={e.url}></GalleryImg>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
