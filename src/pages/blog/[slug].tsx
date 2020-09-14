import BlogContainer from '@/components/blog/blog-container.component';
import CustomHead from '@/components/custom-head/custom-head.component';
import Footer from '@/components/footer/footer.component';
import LayoutContainer from '@/components/shared/layout/layout.container';
import { BlogpostQueryResult } from '@/components/types';
import { GetServerSideProps } from 'next';
import { Blogpost } from '../../api/queries';
import { initializeApollo } from '../../lib/apolloClient';

type Props = {
  blogpostQuery: BlogpostQueryResult;
};

const IndexPage: React.FC<Props> = ({ blogpostQuery }) => {
  const post = blogpostQuery.data?.blogpost;

  const title = post?.title || '';
  const description = post?.excerpt || '';
  const ogImage = post?.previewImage || { url: '' };
  return (
    <>
      <CustomHead title={title} description={description} ogImage={ogImage} />
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

  const blogpost = await apolloClient.query({
    query: Blogpost,
    variables: { slug: params?.slug },
  });

  // Usually, fetching from GraphCMS is done via Apollo Client hooks on
  // component level. Here, we need the blogpost data on page level to inject
  // data from a post into the head. We need to do this here and can't do it
  // later via Javascript since Google and others want a pre-rendered version of
  // the meta tags.

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      blogpostQuery: blogpost,
    },
  };
};

export default IndexPage;
