import BlogContainer from '@/components/blog/blog-container.component';
import Footer from '@/components/footer/footer.component';
import LayoutContainer from '@/components/shared/layout/layout.container';
import { GetServerSideProps } from 'next';
import { Blogpost, blogpostVars } from '../../api/queries';
import { initializeApollo } from '../../lib/apolloClient';

const IndexPage: React.FC = () => {
  return (
    <>
      <LayoutContainer page='blog'>
        <BlogContainer />
        <Footer />
      </LayoutContainer>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  if (params && params.post_slug) {
    await apolloClient.query({
      query: Blogpost,
      variables: blogpostVars(params.post_slug),
    });
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
