import PortfolioCategories from '@/components/categories/root-categories/portfolio-categories.component';
import Footer from '@/components/footer/footer.component';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import { ImgsPortfolio } from '@/src/api/queries';
import { SEO_PORTFOLIO_META as meta } from '@/src/config';
import { createMetaTags } from '@/src/utils/meta';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { initializeApollo } from '../lib/apolloClient';

const PortfolioPage: React.FC = () => {
  const metaTags = createMetaTags({
    title: meta.title,
    description: meta.description,
    ogImage: meta.image,
  });
  return (
    <>
      <Head>{metaTags}</Head>
      <LayoutContainer>
        <Sh1>portfolio</Sh1>
        <PortfolioCategories />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ImgsPortfolio,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default PortfolioPage;
