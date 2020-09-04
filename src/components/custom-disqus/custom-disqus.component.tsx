import { Blogpost } from '@/components/types';
import { DiscussionEmbed } from 'disqus-react';

type DisqusProps = Pick<Blogpost, 'id' | 'title' | 'slug'>;

const CustomDisqus: React.FC<DisqusProps> = ({ id, title, slug }) => {
  return (
    <DiscussionEmbed
      shortname='eric-film'
      config={{
        url: `https://eric.film/blog/${slug}`,
        identifier: id,
        title: title,
      }}
    />
  );
};

export default CustomDisqus;
