import BlogContent from './content/blog-content.component';
import { DiscussionEmbed } from 'disqus-react';
import { BlogPostContent } from '@/components/types';
import { Container } from './blog-container.styles';

type Props = {
  post: BlogPostContent;
};

const BlogContainer: React.FC<Props> = ({ post }) => {
  let url = 'https://eric.film/blog/';
  return (
    <Container>
      <BlogContent {...post} />
      <DiscussionEmbed
        shortname='eric-film'
        config={{
          url: `${url}${post.slug}`,
          identifier: String(post.id),
          title: post.title,
        }}
      />
    </Container>
  );
};

export default BlogContainer;
