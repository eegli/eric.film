import About from '@/components/about/about.component';
import CustomHead from '@/components/custom-head/custom-head.component';
import Footer from '@/components/footer/footer.component';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import { SEO_ABOUT_META as meta } from '@/src/config';

const AboutPage: React.FC = () => {
  return (
    <>
      <CustomHead
        title={meta.title}
        description={meta.description}
        ogImage={meta.image}
      />
      <LayoutContainer breakpoint='large'>
        <Sh1>about</Sh1>
        <About />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default AboutPage;
