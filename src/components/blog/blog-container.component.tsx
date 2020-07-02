import BlogContent from './content/blog-content.component';
import { DiscussionEmbed } from 'disqus-react';
import { BlogPostData } from '@/components/types';
import { Container } from './blog-container.styles';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { SINGLE_BLOGPOST, singleBlogPostVars } from '../../api/queries';
import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import Head from 'next/head';
import { makeBlogSchema } from 'src/utils/schema';
import { trimExcerptForMeta } from 'src/utils/metaExcerpt';

const BlogContainer: React.FC = () => {
  const router = useRouter();
  const slug = router.query.post_slug ? router.query.post_slug : '';
  let url = 'https://eric.film/blog/';

  const { loading, data } = useQuery<BlogPostData>(SINGLE_BLOGPOST, {
    variables: singleBlogPostVars(slug),
  });

  if (loading) {
    return (
      <Container>
        <CustomSpinner />
      </Container>
    );
  }
  if (data && !data.blogpost) {
    return (
      <div style={{ textAlign: 'center', marginTop: '300px' }}>
        <p>uhh... this post does not exist :(</p>
        <a style={{ textDecoration: 'underline' }} href='/blog?cat=all'>
          go back to all blogs
        </a>
      </div>
    );
  }
  if (data && data.blogpost) {
    const post = data.blogpost;
    const metaExcerpt = trimExcerptForMeta(post.excerpt);
    return (
      <>
        <Head>
          <title>{post.title}</title>
          <meta name='description' content={metaExcerpt} />
          <meta property='og:title' content={post.title} />
          <meta property='og:image' content={post.previewImage.url} />
          <meta property='og:site_name' content='Eric Egli' />
          <meta property='og:description' content={metaExcerpt} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={post.title} />
          <meta name='twitter:description' content={metaExcerpt} />
          <meta name='twitter:image' content={post.previewImage.url} />
          <script
            key={`blogJSON-${post.id}`}
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: makeBlogSchema(post),
            }}
          />
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
      </>
    );
  } else {
    return <div></div>;
  }
};

export default BlogContainer;
