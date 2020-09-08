import About from '@/components/about/about.component';
import Footer from '@/components/footer/footer.component';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import { SEO_ABOUT_META as meta } from '@/src/config';
import { createMetaTags } from '@/src/utils/meta';
import Head from 'next/head';

const AboutPage: React.FC = () => {
  const metaTags = createMetaTags({
    title: meta.title,
    description: meta.description,
    ogImage: meta.image,
  });
  return (
    <>
      <Head>{metaTags}</Head>
      <LayoutContainer pageBreakpoint='large'>
        <Sh1>about</Sh1>
        <About />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default AboutPage;
