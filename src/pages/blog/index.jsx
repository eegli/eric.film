import React from 'react';
import { request } from '../../api/graphql';
import { ALL_BLOGPOSTS } from '../../api/queries';
import MdPreview from '../../components/markdown/md-preview.component';

import { Sh1 } from '@/shared/headings.styles';
import LayouContainer from '@/shared/layout/layout.container';

const IndexPage = ({ posts }) => {
  return (
    <LayouContainer>
      <Sh1>blog</Sh1>
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
    </LayouContainer>
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
