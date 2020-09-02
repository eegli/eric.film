import { Blogpost, BlogType } from '@/src/generated/graphql';

// BLOG CATEGORIES
// Same enums as in Graphcms
export enum BlogCategories {
  BLOG_ALL = 'all',
  BLOG_TECH = 'tech',
  BLOG_VOTW = 'votw',
  BLOG_VARIA = 'varia',
}

export enum PortfolioCategories {
  PORTFOLIO_STILL = 'still',
  PORTFOLIO_MOVING = 'moving',
  PORTFOLIO_CLIENTS = 'clients',
  PORTFOLIO_DEV = 'dev',
}

export type Category = BlogCategories | PortfolioCategories;

// BLOGPOST SCHEMA
// export interface BlogPostPreview {
//   excerpt: string;
//   slug: string;
//   title: string;
//   type: BlogCategories;
//   createdAt: string;
//   previewImage?: { url: string };
// }

export interface BlogPostContent extends BlogPostPreview {
  id: string;
  content: string;
  updatedAt: string;
  ytvideo?: string;
}

export interface BlogPostPreviewData {
  blogposts: Array<BlogPostPreview>;
  blogpostsConnection: {
    aggregate: {
      count: number;
    };
  };
}

export interface BlogPostData {
  blogpost: BlogPostContent;
}

export enum SortBy {
  createdAt_DESC = 'createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
}

// IMAGES
export interface ImageUrl {
  url: string;
}

export type ImageUrlArray = Array<ImageUrl>;

export interface ImageCollection {
  collection: ImageUrlArray;
  id: string;
  imageType: 'home' | 'portfolio';
}
export interface ImageData {
  imgCollections: Array<ImageCollection>;
}

// QUERIES
export interface PreviewVars {
  skip: number;
  first: number;
  orderBy: SortBy;
}

export type PostVars = Pick<BlogPostPreview, 'slug'>;

// NEW
export enum BlogTypeAll {
  All = 'all',
}

export type AnyBlogPostType = BlogTypeAll | BlogType;

export type BlogPostPreview = Pick<
  Blogpost,
  'title' | 'excerpt' | 'slug' | 'type' | 'previewImage' | 'createdAt'
>;
