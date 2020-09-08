import Disclaimer from '@/components/disclaimer/disclaimer.component';
import LayoutContainer from '@/shared/layout/layout.container';
import { SEO_DISCLAIMER_META as meta } from '@/src/config';
import { createMetaTags } from '@/src/utils/meta';
import Head from 'next/head';

const DisclaimerPage: React.FC = () => {
  const metaTags = createMetaTags({
    title: meta.title,
    description: meta.description,
    ogImage: meta.image,
  });
  return (
    <>
      <Head>{metaTags}</Head>
      <LayoutContainer pageBreakpoint='small'>
        <Disclaimer />
      </LayoutContainer>
    </>
  );
};

export default DisclaimerPage;
