import CustomSpinner from '@/components/custom-spinner/custom-spinner.component';
import ErrorMessage from '@/components/error-message/error-message.component';
import { Blogpost, useBlogpostQuery } from '@/components/types';
import { getElementFromArray } from '@/src/utils/array';
import { checkIfImageExists } from '@/src/utils/blog';
import { createMetaTags } from '@/src/utils/meta';
import { makeBlogSchemaForHead } from '@/src/utils/schema';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CommentInfo, Container } from './blog-container.styles';
import BlogContent from './content/blog-content.component';

const CustomDisqus = dynamic(
  () => import('@/components/custom-disqus/custom-disqus.component'),
  {
    ssr: false,
  },
);

const BlogContainer: React.FC = () => {
  const router = useRouter();
  const slug = router.query.slug ? router.query.slug : '';

  const { loading, data } = useBlogpostQuery({
    variables: { slug: getElementFromArray(slug) },
  });

  if (loading) {
    return <CustomSpinner />;
  }
  // We have data but GraphQl returns an empty array of blogposts. Happens when
  // wrong url is entered and a post with this url doesn't exist
  if (data && !data.blogpost) {
    return (
      <ErrorMessage>
        uhh... this post does not exist. are you sure you pasted the right url?
      </ErrorMessage>
    );
  }
  if (data?.blogpost) {
    const post = data.blogpost;

    // Return fallback image if preview === null
    const metaImage = checkIfImageExists({
      image: post.previewImage,
      id: post.id,
    });

    const metaTags = createMetaTags({
      title: post.title,
      description: post.excerpt,
      ogImage: metaImage,
    });

    return (
      <>
        <Head>
          {metaTags}
          <script
            key={`blogLd-JSON-${post.id}`}
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: makeBlogSchemaForHead(post as Blogpost, metaImage.url),
            }}
          />
        </Head>
        <Container>
          <BlogContent {...post} />
          <div style={{ padding: '0 1rem' }}>
            <CommentInfo>
              Note: In order to comment as a guest, click the "Name" field and
              then select "I'd rather post as a guest" from the options.
            </CommentInfo>
            <CustomDisqus id={post.id} title={post.title} slug={post.slug} />
          </div>
        </Container>
      </>
    );
  } else {
    return <div />;
  }
};

export default BlogContainer;
