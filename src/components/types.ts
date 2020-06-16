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
  PORTFOLIO_CLIENTS = 'clients',
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
  content: any;
  type: BlogCategories;
  previewImage: { url: string };
}

export interface BlogPostData {
  blogposts: BlogPost[];
  blogpostsConnection: {
    aggregate: {
      count: number;
    };
  };
}

/* 
IMAGES
*/

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
