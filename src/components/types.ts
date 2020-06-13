/* 
BLOG CATEGORIES
*/
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
  PORTFOLIO_CLIENTS = 'client',
  PORTFOLIO_DEV = 'dev',
}

export type Category = BlogCategories | PortfolioCategories;

/*
 BLOGPOST SCHEMA
 */

export interface BlogPost {
  excerpt: string;
  id: number;
  slug: string;
  title: string;
  type: BlogCategories;
}

export type BlogPosts = BlogPost[];

/* 
IMAGES
*/

export type ImageUrl = {
  url: string;
};

export type ImageProps = {
  images: ImageUrl[];
};
