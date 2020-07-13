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
import { SEO_OG_FALLBACK } from '../../../config';
import CommentInfo from './comment-info/comment-info.component';

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
    const image = post.previewImage
      ? post.previewImage.url
      : SEO_OG_FALLBACK.url;
    return (
      <>
        <Head>
          <title>{post.title}</title>
          <meta name='description' content={metaExcerpt} />
          <meta property='og:title' content={post.title} />
          <meta property='og:image' content={image} />
          <meta property='og:site_name' content='Eric Egli' />
          <meta property='og:description' content={metaExcerpt} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={post.title} />
          <meta name='twitter:description' content={metaExcerpt} />
          <meta name='twitter:image' content={image} />
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
          <div style={{ padding: '0 1rem' }}>
            <CommentInfo />
            <DiscussionEmbed
              shortname='eric-film'
              config={{
                url: `${url}${post.slug}`,
                identifier: String(post.id),
                title: post.title,
              }}
            />
          </div>
        </Container>
      </>
    );
  } else {
    return <div></div>;
  }
};

export default BlogContainer;
