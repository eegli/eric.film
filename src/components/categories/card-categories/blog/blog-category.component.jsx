import React from 'react';
import {
  ALL_POSTS_PREVIEW,
  allPostsPreviewQueryVars,
} from '../../../../api/queries';
import BlogPreview from '@/components/blog/blog-preview.component';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus } from 'apollo-client';

import { BlogCategoryContainer, LoadMoreButton } from './blog-category.styles';

import { BlogPost, Category, BlogPosts } from '@/components/types';

const BlogCategory = ({ filter }) => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_PREVIEW,
    {
      variables: allPostsPreviewQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  );

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: blogposts.length,
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
  if (error) return <div>Error loading posts</div>;
  if (loading && !loadingMorePosts)
    return (
      <div>
        <CustomSpinner />
      </div>
    );
  const { blogposts, blogpostsConnection } = data;
  const areMorePosts = blogposts.length < blogpostsConnection.aggregate.count;

  let posts;
  !filter
    ? (posts = blogposts)
    : (posts = blogposts.filter(post => post.type === filter));
  return (
    <>
      <BlogCategoryContainer>
        {posts.map(blog => (
          <BlogPreview
            key={blog.id}
            id={blog.id}
            title={blog.title}
            previewImage={blog.previewImage}
            excerpt={blog.excerpt}
            slug={blog.slug}
            type={blog.type}
          />
        ))}
      </BlogCategoryContainer>

      {areMorePosts && (
        <LoadMoreButton
          onClick={() => loadMorePosts()}
          disabled={loadingMorePosts}>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </LoadMoreButton>
      )}
    </>
  );
};

export default BlogCategory;
