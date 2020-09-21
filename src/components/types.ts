import { Asset, Blogpost } from '@/src/generated/graphql';
export * from '@/src/generated/graphql';

// In GrapCMS, each blogpost falls into a distinct category. "all" is not one of
// them - "all" is the sum of all posts and part of a union type to display all
// blog posts regardless of their category
export enum BlogTypeAll {
  All = 'all',
}

// The portfolio categories, unlike the blog categories, are not defined in
// GraphCMS as there is no content type for it. These categories don't depend on
// external data and their types are defined here
export enum PortfolioCategories {
  PORTFOLIO_STILL = 'still',
  PORTFOLIO_MOVING = 'moving',
  PORTFOLIO_CLIENTS = 'clients',
  PORTFOLIO_DEV = 'dev',
}

/* Custom types from schema, typed for convenience */

// Actual content of a blogpost
export type BlogPostContent = Pick<
  Blogpost,
  'title' | 'content' | 'ytvideo' | 'createdAt' | 'updatedAt'
>;

// Blogpost data that is used for structured data
export type BlogPostMeta = Pick<
  Blogpost,
  'createdAt' | 'updatedAt' | 'title'
> & {
  previewImage: {
    size1_1: Asset['url'];
    size4_3: Asset['url'];
    size16_9: Asset['url'];
    sizeOG: Asset['url'];
  };
};
