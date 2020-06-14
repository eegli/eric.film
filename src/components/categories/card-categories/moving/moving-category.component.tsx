import React, { useState } from 'react';
import {
  MovingCategoryContainer,
  StyledIframe,
  IframeWrapper,
} from './moving-category.styles';
import Spinner from '@/components/custom-spinner/custom-spinner.component';

const MovingCategory: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleSpinner = (): void => {
    setIsLoading(false);
  };
  return (
    <MovingCategoryContainer>
      {isLoading ? <Spinner /> : null}
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/HWhZJu5RT7Q'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          onLoad={handleSpinner}
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/HWhZJu5RT7Q'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/HWhZJu5RT7Q'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/HWhZJu5RT7Q'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/HWhZJu5RT7Q'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </IframeWrapper>
    </MovingCategoryContainer>
  );
};

export default MovingCategory;
