import { IMGS_HOME } from '@/api/queries';
import CustomLink from '@/components/custom-link/custom-link.component';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import Gallery from '@/components/gallery/gallery.component';
import { ImageData } from '@/components/types';
import { DescriptionContainer, Sh1, Sh2 } from '@/shared/headings.styles';
import { useQuery } from '@apollo/client';
import { LandingContentContainer } from './landing-content.styles';

const LandingContent: React.FC = ({ children }) => {
  const { loading, error, data } = useQuery<ImageData>(IMGS_HOME);

  if (error) return <div>'Error loading images :('</div>;
  if (loading)
    return (
      <div style={{ textAlign: 'center' }}>
        <CustomSpinner />
      </div>
    );

  if (data) {
    const images = data.imgCollections[0];
    return (
      <>
        <LandingContentContainer>
          {children}
          <Sh1 landing>eric.egli</Sh1>

          <DescriptionContainer>
            <Sh2>
              film & photography <br />x <br />
              frontend development
            </Sh2>
          </DescriptionContainer>
          <CustomLink href='/about'>say hi to the team</CustomLink>
          {images ? <Gallery index images={images.collection} /> : null}
        </LandingContentContainer>
      </>
    );
  }

  return <div></div>;
};

export default LandingContent;
