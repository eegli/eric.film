import React from 'react';
import { DescriptionContainer, Sh1, Sh2 } from '@/shared/headings.styles';
import {
  LandingContainer,
  ContentContainer,
  CardContainer,
  CardTitle,
  CardContent,
} from './landing-content.styles';
import CustomLink from '@/components/custom-link/custom-link.component';
import { LATEST_BLOGPOST } from '@/api/queries';
import { useQuery } from '@apollo/react-hooks';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import { BlogPostHomeData } from '@/components/types';

const LandingContent: React.FC = () => {
  const { loading, error, data } = useQuery<BlogPostHomeData>(LATEST_BLOGPOST);

  if (error) return <div>'Error loading images :('</div>;
  if (loading)
    return (
      <div style={{ textAlign: 'center' }}>
        <CustomSpinner />
      </div>
    );

  if (data) {
    console.log(data);
    return (
      <LandingContainer>
        <Sh1 landing>| eric.egli |</Sh1>

        <DescriptionContainer>
          <Sh2>film & photography</Sh2>
          <Sh2>x</Sh2>
          <Sh2>frontend development</Sh2>
        </DescriptionContainer>
        <CustomLink href='/about'>more</CustomLink>
        <ContentContainer>
          <CardContainer>
            <CardTitle>
              <h2>about</h2>
            </CardTitle>
            <CardContent>
              Watch as Ivan Agerton of Royal Galactic Media shares his
              inspiration behind leaving his office job to pursue a career in
              corporate documentaries as well as his passion for portrait
              photography.
            </CardContent>
          </CardContainer>
          <CardContainer>
            <CardTitle>
              <h2>portfolio</h2>
            </CardTitle>
            <CardContent>
              Watch as Ivan Agerton of Royal Galactic Media shares his
              inspiration behind leaving his office job to pursue a career in
              corporate documentaries as well as his passion for portrait
              photography.
            </CardContent>
          </CardContainer>
          <CardContainer>
            <CardTitle>
              <h2>blog</h2>
            </CardTitle>
            <CardContent>
              Watch as Ivan Agerton of Royal Galactic Media shares his
              inspiration behind leaving his office job to pursue a career in
              corporate documentaries as well as his passion for portrait
              photography.
            </CardContent>
          </CardContainer>
        </ContentContainer>
      </LandingContainer>
    );
  }

  return <div></div>;
};

export default LandingContent;
