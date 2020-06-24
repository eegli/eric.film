import React from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { Spinner } from '@/components/custom-spinner/custom-spinner.styles';

const Image: React.FC<HTMLImageElement> = props => {
  return (
    <ProgressiveImage src={props.src} placeholder=''>
      {(src: string, loading: boolean) => {
        return loading ? <Spinner /> : <img src={props.src} alt='blog-image' />;
      }}
    </ProgressiveImage>
  );
};

export default Image;
