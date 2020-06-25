import { BlogPostContent } from '@/components/types';

export const makeBlogSchema: any = (post: BlogPostContent) => {
  return {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    datePublished: post.createdAt,
    headline: post.title,
    image: [post.previewImage.url],
  };
};
