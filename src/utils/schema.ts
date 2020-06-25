import { BlogPostContent } from '@/components/types';

export const makeBlogSchema: any = (post: BlogPostContent) => {
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    headline: post.title,
    image: [post.previewImage.url],
  };

  return JSON.stringify(schema);
};
