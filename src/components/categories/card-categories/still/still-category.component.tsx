import { IMGS_PORTFOLIO } from '@/api/queries';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import ErrorMessage from '@/components/error-message/error-message.component';
import Gallery from '@/components/gallery/gallery.component';
import { ImageData } from '@/components/types';
import { useQuery } from '@apollo/client';

const StillCategory: React.FC = () => {
  const { loading, error, data } = useQuery<ImageData>(IMGS_PORTFOLIO);

  if (error)
    return <ErrorMessage>Failed to load images from server</ErrorMessage>;
  if (loading) {
    return <CustomSpinner />;
  }
  if (data) {
    const images = data.imgCollections[0];
    return (
      <>
        {images ? <Gallery index={false} images={images.collection} /> : null}
      </>
    );
  } else {
    return <div />;
  }
};

export default StillCategory;
