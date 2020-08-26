import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import ErrorMessage from '@/components/error-message/error-message.component';
import { BlogPostData } from '@/components/types';
import { SEO_OG_FALLBACK } from '@/src/config';
import { trimExcerptForMeta } from '@/src/utils/metaExcerpt';
import { makeBlogSchema } from '@/src/utils/schema';
import { useQuery } from '@apollo/client';
import { DiscussionEmbed } from 'disqus-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { singleBlogPostVars, SINGLE_BLOGPOST } from '../../api/queries';
import { Container } from './blog-container.styles';
import CommentInfo from './comment-info/comment-info.component';
import BlogContent from './content/blog-content.component';

const BlogContainer: React.FC = () => {
  const router = useRouter();
  const slug = router.query.post_slug ? router.query.post_slug : '';
  const url = 'https://eric.film/blog/';

  const { loading, data } = useQuery<BlogPostData>(SINGLE_BLOGPOST, {
    variables: singleBlogPostVars(slug),
  });

  if (loading) {
    return <CustomSpinner />;
  }
  if (data && !data.blogpost) {
    return (
      <ErrorMessage>
        uhh... this post does not exist. are you sure you pasted the right url?
      </ErrorMessage>
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
            key={`blogLd-JSON-${post.id}`}
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
    return <div />;
  }
};

export default BlogContainer;
