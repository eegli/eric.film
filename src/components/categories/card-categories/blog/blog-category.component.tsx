import BlogPreview from '@/components/blog/preview/blog-preview.component';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import ErrorMessage from '@/components/error-message/error-message.component';
import { allBlogPostsPreviewVars } from '@/src/api/queries';
import {
  Blogpost,
  BlogpostOrderByInput,
  BlogType,
  useAll_Blogposts_PreviewQuery,
} from '@/src/generated/graphql';
import { NetworkStatus } from '@apollo/client';
import {
  BlogCategoryContainer,
  FetchButton,
  FetchIcon,
} from './blog-category.styles';

type Props = {
  filter?: BlogType;
  orderBy: BlogpostOrderByInput;
};

const BlogCategory: React.FC<Props> = ({ filter, orderBy }) => {
  const {
    loading,
    error,
    data,
    fetchMore,
    networkStatus,
  } = useAll_Blogposts_PreviewQuery({
    variables: allBlogPostsPreviewVars(orderBy),
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  if (error)
    return <ErrorMessage>Failed to load blog posts from server</ErrorMessage>;
  if (loading && !loadingMorePosts) return <CustomSpinner />;

  if (data && data.blogposts) {
    const loadMorePosts = () => {
      fetchMore({
        variables: {
          skip: data.blogposts.length,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            blogposts: [
              ...previousResult.blogposts,
              ...fetchMoreResult.blogposts,
            ],
          });
        },
      });
    };
    const { blogposts, blogpostsConnection } = data;
    const areMorePosts = blogposts.length < blogpostsConnection.aggregate.count;

    let posts: Array<any>;

    // If there is no filter set - which is the case for the "all" category - we just display all blogposts, otherwise filter according to the types

    // TODO useMemo
    !filter
      ? (posts = data.blogposts)
      : (posts = data.blogposts.filter(post => post.type === filter));

    return (
      <>
        <BlogCategoryContainer>
          {posts.map((post: Blogpost) => (
            <BlogPreview key={post.id} {...post} />
          ))}
        </BlogCategoryContainer>
        {areMorePosts && (
          <FetchButton
            onClick={() => loadMorePosts()}
            disabled={loadingMorePosts}>
            <FetchIcon />
            {loadingMorePosts ? 'loading...' : 'load more'}
          </FetchButton>
        )}
      </>
    );
  } else {
    return <div />;
  }
};

export default BlogCategory;
