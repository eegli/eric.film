import { DiscussionEmbed } from 'disqus-react';

type DisqusProps = {
  id: string;
  title: string;
  slug: string;
};

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
