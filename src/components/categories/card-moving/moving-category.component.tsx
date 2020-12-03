import Spinner from '@/components/custom-spinner/custom-spinner.component';
import { useState } from 'react';
import {
  IframeWrapper,
  MovingCategoryContainer,
  StyledIframe,
} from './moving-category.styles';

const MovingCategory: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSpinner = (): void => {
    setIsLoading(false);
  };
  return (
    <MovingCategoryContainer>
      {isLoading ? <Spinner /> : null}
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/0szkaYq_PgQ'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          onLoad={handleSpinner}
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/u7b6SDAe5lg'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          onLoad={handleSpinner}
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/LH6Nhugxs5k'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          onLoad={handleSpinner}
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/watch?v=Es2B2ymCjVs'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          onLoad={handleSpinner}
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed//I7OFtjBexjc'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          onLoad={handleSpinner}
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/HH_IKM4C8Pw'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          onLoad={handleSpinner}
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/efOcxCH1NEA'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          onLoad={handleSpinner}
        />
      </IframeWrapper>
      <IframeWrapper>
        <StyledIframe
          src='https://www.youtube.com/embed/oVTPbVlnum0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          onLoad={handleSpinner}
        />
      </IframeWrapper>
    </MovingCategoryContainer>
  );
};

export default MovingCategory;
