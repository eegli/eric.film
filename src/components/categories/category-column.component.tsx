import React from 'react';
import BlogCategory from './card-categories/blog-category.component';

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
      return <div>still only</div>;
    case PortfolioCategories.PORTFOLIO_MOVING:
      return <div>moving only</div>;
    case PortfolioCategories.PORTFOLIO_CLIENTS:
      return <div>client only</div>;
    case PortfolioCategories.PORTFOLIO_DEV:
      return <div>dev only</div>;

    case BlogCategories.BLOG_ALL:
      return <BlogCategory />;
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
