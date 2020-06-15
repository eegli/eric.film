import React from 'react';
import {
  ALL_POSTS_PREVIEW,
  allPostsPreviewQueryVars,
} from '../../../../api/queries';
import BlogPreview from '@/components/blog/blog-preview.component';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import { useQuery } from '@apollo/react-hooks';

import { BlogCategoryContainer } from './blog-category.styles';

import { BlogPost, Category, BlogPosts } from '@/components/types';

const BlogCategory = ({ filter }) => {
  const { loading, error, data, fetchMore } = useQuery(ALL_POSTS_PREVIEW, {
    variables: allPostsPreviewQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  // Loading case
  if (loading)
    return (
      <>
        <BlogCategoryContainer>
          <CustomSpinner />
        </BlogCategoryContainer>
      </>
    );
  // Normal case with valid data
  if (data && !error) {
    const { blogposts, blogpostsConnection } = data;
    console.log(blogposts);

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

    const areMorePosts = blogposts.length < blogpostsConnection.aggregate.count;
    let posts;
    !filter
      ? (posts = blogposts)
      : (posts = blogposts.filter(post => post.type === filter));
    return (
      <BlogCategoryContainer>
        {posts.map(blog => (
          <BlogPreview
            key={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            slug={blog.slug}
            type={blog.type}
          />
        ))}
        {areMorePosts && (
          <button onClick={() => loadMorePosts()}>{'Show More'}</button>
        )}
      </BlogCategoryContainer>
    );
  }
};

export default BlogCategory;
