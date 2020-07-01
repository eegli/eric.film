import React from 'react';
import { GetServerSideProps, GetStaticProps } from 'next';
import BlogContainer from '@/components/blog/blog-container.component';
import { SINGLE_BLOGPOST } from '../../api/queries';
import { fetcher } from '../../api/graphql';
import { BlogPostContent } from '@/components/types';
import LayoutContainer from '@/components/shared/layout/layout.container';
import Head from 'next/head';
import { makeBlogSchema } from 'src/utils/schema';

type Props = {
  post: BlogPostContent;
};

const IndexPage: React.FC<Props> = ({ post }) => {
  if (post) {
    // console.log(makeBlogSchema(post));
    let trimmedExc =
      post.excerpt.length > 120
        ? post.excerpt.substring(0, 120).concat('...')
        : post.excerpt;
    return (
      <>
        <Head>
          <title>{post.title}</title>
          <meta name='description' content={`${trimmedExc}`} />
          <meta property='og:title' content={post.title} />
          <meta property='og:image' content={post.previewImage.url} />
          <meta property='og:site_name' content='Eric Egli' />
          <meta property='og:description' content={trimmedExc} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={post.title} />
          <meta name='twitter:description' content={trimmedExc} />
          <meta name='twitter:image' content={post.previewImage.url} />
          <script
            key={`blogJSON-${post.id}`}
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: makeBlogSchema(post),
            }}
          />
        </Head>

        <LayoutContainer page='blog'>
          <BlogContainer post={post} />
        </LayoutContainer>
      </>
    );
  } else {
    return (
      // TODO
      <LayoutContainer page='blog'>
        <div>uuups, something can't be found...</div>
      </LayoutContainer>
    );
  }
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.post_slug) {
    var post = await fetcher(SINGLE_BLOGPOST(params.post_slug));
  }

  return {
    props: {
      post: post.blogpost,
    },
  };
};

export default IndexPage;
