import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import ErrorMessage from '@/components/error-message/error-message.component';
import Gallery from '@/components/gallery/gallery.component';
import { useImageCollectionPortfolioQuery } from '@/components/types';

const StillCategory: React.FC = () => {
  const { loading, error, data } = useImageCollectionPortfolioQuery();

  if (error)
    return <ErrorMessage>Failed to load images from server</ErrorMessage>;
  if (loading) {
    return <CustomSpinner />;
  }
  if (data?.imgCollection?.collection) {
    const images = data.imgCollection.collection;
    return <>{images ? <Gallery images={images} /> : null}</>;
  } else {
    return <div />;
  }
};

export default StillCategory;
