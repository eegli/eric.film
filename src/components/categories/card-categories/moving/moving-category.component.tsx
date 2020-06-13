import React, { useState } from 'react';
import { MovingCategoryContainer } from './moving-category.styles';
import { Siframe } from '@/shared/elements.styles';
import Spinner from '@/components/custom-spinner/custom-spinner.component';

const MovingCategory: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleSpinner = (): void => {
    setIsLoading(false);
  };
  return (
    <MovingCategoryContainer>
      {isLoading ? <Spinner /> : null}
      <Siframe
        src='https://www.youtube.com/embed/HWhZJu5RT7Q'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        name='portfolio youtube video'
        onLoad={handleSpinner}
      />
      <Siframe
        src='https://www.youtube.com/embed/HWhZJu5RT7Q'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        name='portfolio youtube video'
        onLoad={handleSpinner}
      />
      <Siframe
        src='https://www.youtube.com/embed/HWhZJu5RT7Q'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        name='portfolio youtube video'
        onLoad={handleSpinner}
      />
      <Siframe
        src='https://www.youtube.com/embed/HWhZJu5RT7Q'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        name='portfolio youtube video'
        onLoad={handleSpinner}
      />
      <Siframe
        src='https://www.youtube.com/embed/HWhZJu5RT7Q'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        name='portfolio youtube video'
        onLoad={handleSpinner}
      />
      <Siframe
        src='https://www.youtube.com/embed/HWhZJu5RT7Q'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        name='portfolio youtube video'
        onLoad={handleSpinner}
      />
    </MovingCategoryContainer>
  );
};

export default MovingCategory;
