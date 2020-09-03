// The progressive image library needs a html element
import ErrorMessage from '@/components/error-message/error-message.component';
import { Asset } from '@/components/types';
import ProgressiveImage from 'react-progressive-graceful-image';
import { GalleryContainer, Image } from './gallery.styles';

export type GalleryProps = {
  images: Array<{ url: string }>;
  layout?: 'grid';
};

const Gallery: React.FC<GalleryProps> = ({ images, layout }) => {
  if (!images) {
    return <ErrorMessage>There was an error displaying images</ErrorMessage>;
  }

  return (
    <>
      <GalleryContainer layout={layout}>
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
