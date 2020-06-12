import React from 'react';
import BlogCategory from './card-categories/blog-category.component';

// Same enums as in GraphCMS
export enum Categories {
  PORTFOLIO_STILL = 'still',
  PORTFOLIO_MOVING = 'moving',
  PORTFOLIO_CLIENTS = 'client',
  PORTFOLIO_DEV = 'dev',
  // blog categories including "DEV"
  BLOG_ALL = 'all',
  BLOG_TECH = 'tech',
  BLOG_VOTW = 'votw',
  BLOG_VARIA = 'varia',
}

type Props = {
  category: Categories;
};

const IndividualCard: React.FC<Props> = ({ category }) => {
  switch (category) {
    case Categories.PORTFOLIO_STILL:
      return <div>still only</div>;
    case Categories.PORTFOLIO_MOVING:
      return <div>moving only</div>;
    case Categories.PORTFOLIO_CLIENTS:
      return <div>client only</div>;
    case Categories.PORTFOLIO_DEV:
      return <div>dev only</div>;

    case Categories.BLOG_ALL:
      return <BlogCategory filter={Categories.BLOG_ALL} />;
    case Categories.BLOG_TECH:
      return <BlogCategory filter={Categories.BLOG_TECH} />;
    case Categories.BLOG_VOTW:
      return <BlogCategory filter={Categories.BLOG_VOTW} />;
    case Categories.BLOG_VARIA:
      return <BlogCategory filter={Categories.BLOG_VARIA} />;
    default:
      return <div>hi</div>;
  }
};

export default IndividualCard;
