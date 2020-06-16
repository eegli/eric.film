import React from 'react';
import Gallery from '@/components/gallery/gallery.component';
import { ALL_IMGS } from '@/api/queries';
import { useQuery } from '@apollo/react-hooks';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import { ImageData } from '@/components/types';
// TODO correct imgs

const StillCategory = () => {
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
      collection => collection.imageType === 'portfolio'
    );
    return <>{images ? <Gallery images={images.collection} /> : null}</>;
  } else {
    return <div></div>;
  }
};

export default StillCategory;
