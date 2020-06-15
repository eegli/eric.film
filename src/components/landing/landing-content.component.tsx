import React from 'react';
import { DescriptionContainer, Sh1, Sh2, Sp } from '@/shared/headings.styles';
import { LandingContentContainer } from './landing-content.styles';
import Gallery from '@/components/gallery/gallery.component';
import CustomLink from '@/components/custom-link/custom-link.component';
import { ALL_IMGS_HOME } from '@/api/queries';
import { useQuery } from '@apollo/react-hooks';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';

const LandingContent: React.FC = ({ children }) => {
  const { loading, error, data } = useQuery(ALL_IMGS_HOME, {
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <div>'Error loading images :('</div>;
  if (loading)
    return (
      <LandingContentContainer>
        <CustomSpinner />
      </LandingContentContainer>
    );

  if (data) {
    const images = data.imgCollectionsConnection.edges[0].node.collection;
    console.log(images);
    return (
      <LandingContentContainer>
        {children}
        <Sh1 landing>| eric.egli |</Sh1>

        <DescriptionContainer>
          <Sh2>film & photography</Sh2>
          <Sh2>x</Sh2>
          <Sh2>frontend development</Sh2>
        </DescriptionContainer>
        <CustomLink href='/about'>more</CustomLink>
        <Gallery images={images} />
      </LandingContentContainer>
    );
  }

  return <div></div>;
};

export default LandingContent;
