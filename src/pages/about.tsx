import About from '@/components/about/about.component';
import Footer from '@/components/footer/footer.component';
import { Sh1 } from '@/shared/headings.styles';
import LayouContainer from '@/shared/layout/layout.container';
import { SEO_ABOUT_META as meta } from '@/src/config';
import { createMetaTags } from '@/src/utils/metaTags';
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
      <LayouContainer page='about'>
        <Sh1>about</Sh1>
        <About />
        <Footer />
      </LayouContainer>
    </>
  );
};

export default AboutPage;
