import React from 'react';
import MdPreview from '../markdown/md-preview.component';

const BlogOverview = ({ posts }) => {
  return (
    <div>
      <title>eric.film Blog Posts</title>
      {posts.map(p => {
        return <MdPreview key={p.id} title={p.title} excerpt={p.excerpt} />;
      })}
    </div>
  );
};

export default BlogOverview;
