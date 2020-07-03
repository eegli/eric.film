import { Sh1 } from '@/shared/headings.styles';
import LayouContainer from '@/shared/layout/layout.container';
import About from '@/components/about/about.component';
import { SEO_ABOUT_META as meta } from '../../config';
import Head from 'next/head';
import Footer from '@/components/footer/footer.component';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta property='og:title' content={meta.og_title} />
        <meta property='og:image' content={meta.og_image} />
        <meta property='og:site_name' content={meta.og_site_name} />
        <meta property='og:description' content={meta.og_description} />
        <meta name='twitter:card' content={meta.twitter_card} />
        <meta name='twitter:title' content={meta.twitter_title} />
        <meta name='twitter:description' content={meta.twitter_description} />
        <meta name='twitter:image' content={meta.twitter_image} />
      </Head>
      <LayouContainer page='about'>
        <Sh1>about</Sh1>
        <About />
        <Footer />
      </LayouContainer>
    </>
  );
};

export default AboutPage;
