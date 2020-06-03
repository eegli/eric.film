import React from 'react';
import Markdown from 'markdown-to-jsx';

import { blogImg } from './md-content.styles';

const MdContent = ({ content }) => {
  return (
    <Markdown
      options={{
        overrides: {
          img: {
            component: blogImg,
          },
        },
      }}>
      {content}
    </Markdown>
  );
};

export default MdContent;
