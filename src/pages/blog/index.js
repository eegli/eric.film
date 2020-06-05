import React from 'react';
import { request } from '../../api/graphql';
import { ALL_BLOGPOSTS } from '../../api/queries';
import MdPreview from '../../components/markdown/md-preview.component';

const IndexPage = ({ posts }) => {
  return (
    <div>
      <h1>Hello</h1>
      {posts.map(p => {
        return (
          <MdPreview
            key={p.id}
            id={p.id}
            title={p.title}
            excerpt={p.excerpt}
            slug={p.slug}
          />
        );
      })}
    </div>
  );
};

export async function getServerSideProps() {
  const data = await request(ALL_BLOGPOSTS);

  return {
    props: {
      posts: data.blogposts,
    },
  };
}

export default IndexPage;
