import React from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';
import { api } from '../../../api/graphql';
import { ALL_BLOGPOSTS } from '../../../api/queries';
import MdPreview from '@/components/markdown/md-preview.component';
import { Categories } from '../individual-card.component';

type Props = {
  filter: Categories;
};

const BlogCategory: React.FC<Props> = ({ filter }) => {
  const { data, error } = useSWR(ALL_BLOGPOSTS, query => request(api, query));
  if (data && !error) {
    console.log(filter);
  }
  const filteredBlogPosts = data.blogposts.filter(post => post.type === filter);

  return (
    <>
      {filteredBlogPosts.map(blog => (
        <MdPreview
          key={blog.slug}
          title={blog.title}
          excerpt={blog.excerpt}
          slug={blog.excerpt}
          type={blog.type}
        />
      ))}
    </>
  );
};

export default BlogCategory;
