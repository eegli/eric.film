import BlogContainer from '@/components/blog/blog-container.component';
import Footer from '@/components/footer/footer.component';
import LayoutContainer from '@/components/shared/layout/layout.container';
import { GetServerSideProps } from 'next';
import { Blogpost } from '../../api/queries';
import { initializeApollo } from '../../lib/apolloClient';

type Props = {
  data: any;
};

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <LayoutContainer breakpoint='small'>
        <BlogContainer />
        <Footer />
      </LayoutContainer>
    </>
  );
};

// Next defines params as ParsedUrlQuery, which is an inteface in the form of
// string | Array<string> Since this is the "root" slug, we don't expect any
// other params and therefore make use of the generic interface of
// GetServerSideProps

// TL;DR: Make sure the key "slug" in the second type passed to
// getServerSideProps is equal to your dynamic page name
export const getServerSideProps: GetServerSideProps<
  { [key: string]: any },
  { slug: string }
> = async ({ params }) => {
  const apolloClient = initializeApollo();

  if (params?.slug) {
    await apolloClient.query({
      query: Blogpost,
      variables: { slug: params.slug },
    });
  }

  const data = await apolloClient.query({
    query: Blogpost,
    variables: { slug: params?.slug },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: data,
    },
  };
};

export default IndexPage;
