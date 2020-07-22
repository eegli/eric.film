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

export interface BlogPostPreview {
  excerpt: string;
  id: string;
  slug: string;
  title: string;
  type: BlogCategories;
  updatedAt: string;
  createdAt: string;
  previewImage?: { url: string };
}

export interface BlogPostContent extends BlogPostPreview {
  content: any;
  ytvideo?: string;
}

export interface BlogPostPreviewData {
  blogposts: BlogPostPreview[];
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

export type ImageUrl = {
  url: string;
};

export interface ImageCollection {
  collection: ImageUrl[];
  id: string;
  imageType: 'home' | 'portfolio';
}
export interface ImageData {
  imgCollections: ImageCollection[];
}

// QUERIES

export interface PreviewVars {
  skip: number;
  first: number;
  orderBy: SortBy;
}

export interface PostVars {
  slug: string;
}
