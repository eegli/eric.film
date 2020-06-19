import BlogContent from './content/blog-content.component';
import Head from 'next/head';
import { DiscussionEmbed } from 'disqus-react';
import { BlogPost } from '@/components/types';
import { Container } from './blog-container.styles';

type Props = {
  post: BlogPost;
};

const BlogContainer: React.FC<Props> = ({ post }) => {
  let url = 'https://localhost:3000/';
  if (String(process.env) === 'production') {
    url = 'https://eric.film/blog/';
  }
  return (
    <div>
      <Head>
        <title>Blog Post</title>
      </Head>
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
    </div>
  );
};

export default BlogContainer;
