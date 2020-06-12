import React from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';
import { api } from '../../../api/graphql';
import { ALL_BLOGPOSTS } from '../../../api/queries';
import MdPreview from '@/components/markdown/md-preview.component';

import { BlogPost, Category } from '@/components/types';

type Props = {
  filter?: Category;
};

const BlogCategory: React.FC<Props> = ({ filter }) => {
  const { data, error } = useSWR(ALL_BLOGPOSTS, query => request(api, query));

  // Loading case
  if (!data && !error) {
    return <div>loading</div>;
    // Normal case with filter
  } else if (filter && data && !error) {
    const filteredBlogPosts = data.blogposts.filter(
      (post: BlogPost) => post.type === filter
    );
    return (
      <>
        {filteredBlogPosts.map((blog: BlogPost) => (
          <MdPreview
            key={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            slug={blog.excerpt}
            type={blog.type}
          />
        ))}
      </>
    );
    // // Normal case without filter
  } else if (!filter && data && !error) {
    return (
      <>
        {data.blogposts.map((blog: BlogPost) => (
          <MdPreview
            key={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            slug={blog.excerpt}
            type={blog.type}
          />
        ))}
      </>
    );
    // General error
  } else {
    return <div>Whops, failed to load posts :(</div>;
  }
};

export default BlogCategory;
