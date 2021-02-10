import ProgressiveImage from 'react-progressive-graceful-image';

const Image: React.FC<HTMLImageElement> = props => {
  return (
    <ProgressiveImage src={props.src} placeholder='/img/placeholder.jpg'>
      {(src: string) => <img src={src} alt='portfolio-image' />}
    </ProgressiveImage>
  );
};

export default Image;
