import React from 'react';
import { MovingCategoryContainer } from './moving-category.styles';
import { Siframe } from '@/shared/elements.styles';

const MovingCategory: React.FC<{}> = () => {
  return (
    <MovingCategoryContainer>
      <Siframe
        src='https://www.youtube.com/embed/HWhZJu5RT7Q'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        name='portfolio youtube video'
      />
      <Siframe
        src='https://youtube.com/embed/I7OFtjBexjc'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        name='portfolio youtube video'
      />
      <Siframe
        src='https://www.youtube.com/embed/HWhZJu5RT7Q'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        name='portfolio youtube video'
      />
    </MovingCategoryContainer>
  );
};

export default MovingCategory;
