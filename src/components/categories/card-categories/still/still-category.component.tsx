import React from 'react';
import Gallery from '@/components/gallery/gallery.component';
import { ALL_IMGS_HOME } from '@/api/queries';
import { useQuery } from '@apollo/react-hooks';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
// TODO correct imgs

const StillCategory = () => {
  const { loading, error, data } = useQuery(ALL_IMGS_HOME, {
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <div>'Error loading images :('</div>;
  if (loading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <CustomSpinner />
      </div>
    );
  }
  if (data) {
    const images = data.imgCollectionsConnection.edges[0].node.collection;
    return (
      <>
        <Gallery images={images} />
      </>
    );
  } else {
    return <div></div>;
  }
};

export default StillCategory;
