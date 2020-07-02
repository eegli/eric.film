import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { NetworkStatus } from 'apollo-client';
import { ALL_BLOGPOSTS_PREVIEW, allBlogPostsPreviewVars } from '@/api/queries';
import BlogPreview from '@/components/blog/preview/blog-preview.component';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';

import {
  BlogCategoryContainer,
  FetchButton,
  FetchIcon,
} from './blog-category.styles';

import {
  BlogPostPreview,
  Category,
  BlogPostPreviewData,
  SortBy,
} from '@/components/types';

type Props = {
  filter?: Category;
  sortBy?: SortBy;
};

const BlogCategory: React.FC<Props> = ({ filter, sortBy }) => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery<
    BlogPostPreviewData
  >(ALL_BLOGPOSTS_PREVIEW, {
    variables: allBlogPostsPreviewVars(sortBy),
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  if (error) return <div>'Error loading posts :('</div>;
  if (loading && !loadingMorePosts)
    return (
      <BlogCategoryContainer>
        <CustomSpinner />
      </BlogCategoryContainer>
    );

  if (data) {
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

    let posts = [];
    !filter
      ? (posts = data.blogposts)
      : (posts = data.blogposts.filter(
          (post: BlogPostPreview) => post.type === filter
        ));

    return (
      <>
        <BlogCategoryContainer>
          {posts.map((post: BlogPostPreview) => (
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
    return <div></div>;
  }
};

export default BlogCategory;
