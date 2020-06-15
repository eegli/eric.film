import React from 'react';
import Gallery from '@/components/gallery/gallery.component';
import useSWR from 'swr';
import { request } from 'graphql-request';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
// TODO correct imgs
import { IMGS_HOME } from '../../../../api/queries';
import { fetcher } from '@/api/graphql';
import { ImageUrl } from '@/components/types';

const StillCategory = () => {
  const { data, error } = useSWR(IMGS_HOME, fetcher);
  // General error
  if (error) {
    return <div>Whops, failed to load images :(</div>;
  }
  // Loading case
  if (!data) {
    return (
      <>
        <CustomSpinner />
      </>
    );
    // Normal case with valid data
  } else {
    const imgs: ImageUrl[] =
      data.imgCollectionsConnection.edges[0].node.collection;
    return (
      <div>
        <Gallery images={imgs} />
      </div>
    );
  }
};

export default StillCategory;
