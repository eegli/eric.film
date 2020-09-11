import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import ErrorMessage from '@/components/error-message/error-message.component';
import Gallery from '@/components/gallery/gallery.component';
import { useImageCollectionsQuery } from '@/components/types';

const StillCategory: React.FC = () => {
  const { loading, error, data } = useImageCollectionsQuery();

  if (error)
    return <ErrorMessage>Failed to load images from server</ErrorMessage>;
  if (loading) {
    return <CustomSpinner />;
  }
  if (data) {
    const images = data.imgCollections.find(
      col => col.imageType === 'portfolio',
    );

    return <>{images ? <Gallery images={images.collection} /> : null}</>;
  } else {
    return <div />;
  }
};

export default StillCategory;
