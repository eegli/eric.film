import BlogCategories from '@/components/categories/root-categories/blog-categories.component';
import Footer from '@/components/footer/footer.component';
import { Sh1 } from '@/shared/headings.styles';
import LayoutContainer from '@/shared/layout/layout.container';
import { SEO_BLOG_INDEX_META as meta } from '@/src/config';
import { createMetaTags } from '@/src/utils/metaTags';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BlogpostsPreview, blogpostsPreviewVars } from '../../api/queries';
import { initializeApollo } from '../../lib/apolloClient';

const IndexPage: React.FC = () => {
  const metaTags = createMetaTags({
    title: meta.title,
    description: meta.description,
    ogImage: meta.image,
  });
  return (
    <>
      <Head>{metaTags}</Head>
      <LayoutContainer page='blog'>
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
    variables: blogpostsPreviewVars(),
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
