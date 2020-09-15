import BlogCategories from '@/components/categories/blog-root.component';
import CustomHead from '@/components/custom-head/custom-head.component';
import Footer from '@/components/footer/footer.component';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import { SEO_BLOG_INDEX_META as meta } from '@/src/config';
import { GetServerSideProps } from 'next';
import { BlogpostsPreview } from '../../api/queries';
import { initializeApollo } from '../../lib/apolloClient';

const IndexPage: React.FC = () => {
  return (
    <>
      <CustomHead
        title={meta.title}
        description={meta.description}
        ogImage={meta.image}
      />
      <LayoutContainer breakpoint='medium'>
        <Sh1>blog</Sh1>
        <BlogCategories />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: BlogpostsPreview,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
