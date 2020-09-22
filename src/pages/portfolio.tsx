import PortfolioCategories from '@/components/categories/portfolio-root.component';
import CustomHead from '@/components/custom-head/custom-head.component';
import Footer from '@/components/footer/footer.component';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import { ImageCollectionPortfolio } from '@/src/api/queries';
import { SEO_PORTFOLIO_META as meta } from '@/src/config';
import { GetStaticProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <CustomHead
        title={meta.title}
        description={meta.description}
        ogImage={meta.image}
      />
      <LayoutContainer breakpoint='medium'>
        <Sh1>portfolio</Sh1>
        <PortfolioCategories />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ImageCollectionPortfolio,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default PortfolioPage;
