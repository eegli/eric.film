import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import ErrorMessage from '@/components/error-message/error-message.component';
import Gallery from '@/components/gallery/gallery.component';
import { useImgs_PortfolioQuery } from '@/src/generated/graphql';

const StillCategory: React.FC = () => {
  const { loading, error, data } = useImgs_PortfolioQuery();

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
