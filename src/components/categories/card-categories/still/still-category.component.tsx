import { ALL_IMGS } from '@/api/queries';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import Gallery from '@/components/gallery/gallery.component';
import { ImageData } from '@/components/types';
import { useQuery } from '@apollo/client';

// TODO correct imgs

const StillCategory: React.FC = () => {
  const { loading, error, data } = useQuery<ImageData>(ALL_IMGS);
  if (error) return <div>'Error loading images :('</div>;
  if (loading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <CustomSpinner />
      </div>
    );
  }
  if (data) {
    const images = data.imgCollections.find(
      collection => collection.imageType === 'portfolio',
    );
    return (
      <>
        {images ? <Gallery index={false} images={images.collection} /> : null}
      </>
    );
  } else {
    return <div></div>;
  }
};

export default StillCategory;
