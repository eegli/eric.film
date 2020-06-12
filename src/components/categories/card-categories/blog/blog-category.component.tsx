import React from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';
import { api } from '../../../../api/graphql';
import { ALL_BLOGPOSTS } from '../../../../api/queries';
import BlogPreview from '@/components/blog/blog-preview.component';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';

import { BlogCategoryContainer } from './blog-category.styles';

import { BlogPost, Category, BlogPosts } from '@/components/types';

type Props = {
  filter?: Category;
};

const BlogCategory: React.FC<Props> = ({ filter }) => {
  const { data, error } = useSWR(ALL_BLOGPOSTS, query => request(api, query));

  // Loading case
  if (!data && !error) {
    return (
      <>
        <BlogCategoryContainer>
          <CustomSpinner />
        </BlogCategoryContainer>
      </>
    );
    // Normal case with valid data
  } else if (data && !error) {
    let posts: BlogPosts;
    !filter
      ? (posts = data.blogposts)
      : (posts = data.blogposts.filter(
          (post: BlogPost) => post.type === filter
        ));
    return (
      <BlogCategoryContainer>
        {posts.map((blog: BlogPost) => (
          <BlogPreview
            key={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            slug={blog.slug}
            type={blog.type}
          />
        ))}
      </BlogCategoryContainer>
    );
  }

  // General error
  else {
    return <div>Whops, failed to load posts :(</div>;
  }
};

export default BlogCategory;