// The progressive image library needs a html element
import ErrorMessage from '@/components/error-message/error-message.component';
import { Asset } from '@/components/types';
import ProgressiveImage from 'react-progressive-graceful-image';
import { GalleryContainer, Image } from './gallery.styles';

type ImageProps = {
  images: Array<Pick<Asset, 'url'>>;
  index: boolean;
};

const Gallery: React.FC<ImageProps> = ({ images, index }) => {
  if (!images) {
    return <ErrorMessage>There was an error displaying images</ErrorMessage>;
  }

  return (
    <>
      <GalleryContainer index={index}>
        {images.map((img: Pick<Asset, 'url'>) => (
          <div key={img.url}>
            <ProgressiveImage
              src={img.url}
              placeholder='/static/img/placeholder.jpg'>
              {(src: string) => <Image src={src} alt='portfolio-image' />}
            </ProgressiveImage>
          </div>
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
