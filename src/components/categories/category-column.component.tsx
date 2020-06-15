import React from 'react';
import {
  DevCategory,
  BlogCategory,
  MovingCategory,
  StillCategory,
  ClientCategory,
} from './card-categories/index';

import {
  BlogCategories,
  PortfolioCategories,
  Category,
} from '@/components/types';

type Props = {
  category: Category;
};

const CategoryColumn: React.FC<Props> = ({ category }) => {
  switch (category) {
    case PortfolioCategories.PORTFOLIO_STILL:
      return <StillCategory />;
    case PortfolioCategories.PORTFOLIO_MOVING:
      return <MovingCategory />;
    case PortfolioCategories.PORTFOLIO_CLIENTS:
      return <ClientCategory />;
    case PortfolioCategories.PORTFOLIO_DEV:
      return <DevCategory />;

    case BlogCategories.BLOG_ALL:
      return <BlogCategory filter={null} />;
    case BlogCategories.BLOG_TECH:
      return <BlogCategory filter={BlogCategories.BLOG_TECH} />;
    case BlogCategories.BLOG_VOTW:
      return <BlogCategory filter={BlogCategories.BLOG_VOTW} />;
    case BlogCategories.BLOG_VARIA:
      return <BlogCategory filter={BlogCategories.BLOG_VARIA} />;
    default:
      return <div>hi</div>;
  }
};

export default CategoryColumn;
