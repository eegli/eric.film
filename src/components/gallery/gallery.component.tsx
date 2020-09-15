import { GalleryContainer, Image } from './gallery.styles';

export type GalleryProps = {
  images: Array<{ id: string; jpg_url: string; webp_url?: string }>;
  layout?: 'grid';
};

// It's possible to use the gallery without webp images, in this case, <picture>
// will fall back to the <img> tag
const Gallery: React.FC<GalleryProps> = ({ images, layout }) => {
  return (
    <>
      <GalleryContainer layout={layout}>
        {images.map(img => (
          <div key={img.id}>
            <picture>
              <source srcSet={img.webp_url} type='image/webp' />
              <source srcSet={img.jpg_url} type='image/jpg' />
              <Image src={img.jpg_url} alt='portfolio-image' />
            </picture>
          </div>
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
