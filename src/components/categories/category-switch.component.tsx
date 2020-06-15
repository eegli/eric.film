import React, { useState } from 'react';
import {
  CardContainer,
  SelectionCardContainer,
} from './category-switch.styles';

import CategoryColumn from './category-column.component';

import {
  BlogCategories,
  PortfolioCategories,
  Category,
} from '@/components/types';

type Props = {
  blogOrPortfolio: 'blog' | 'portfolio';
};

const CategorySwitch: React.FC<Props> = ({ blogOrPortfolio }) => {
  // Set the default categories to be shown
  const [portfCat, setPortfCat] = useState<Category>(
    PortfolioCategories.PORTFOLIO_STILL
  );
  const [blogCat, setBlogCat] = useState<Category>(BlogCategories.BLOG_ALL);

  if (blogOrPortfolio === 'portfolio') {
    return (
      <>
        <SelectionCardContainer>
          <CardContainer
            onClick={() => setPortfCat(PortfolioCategories.PORTFOLIO_STILL)}>
            {PortfolioCategories.PORTFOLIO_STILL}
          </CardContainer>
          <CardContainer
            onClick={() => setPortfCat(PortfolioCategories.PORTFOLIO_MOVING)}>
            {PortfolioCategories.PORTFOLIO_MOVING}
          </CardContainer>
          <CardContainer
            onClick={() => setPortfCat(PortfolioCategories.PORTFOLIO_CLIENTS)}>
            {PortfolioCategories.PORTFOLIO_CLIENTS}
          </CardContainer>
          <CardContainer
            onClick={() => setPortfCat(PortfolioCategories.PORTFOLIO_DEV)}>
            {PortfolioCategories.PORTFOLIO_DEV}
          </CardContainer>
        </SelectionCardContainer>
        <CategoryColumn category={portfCat} />
      </>
    );
  } else if (blogOrPortfolio === 'blog') {
    return (
      <>
        <SelectionCardContainer>
          <CardContainer onClick={() => setBlogCat(BlogCategories.BLOG_ALL)}>
            {BlogCategories.BLOG_ALL}
          </CardContainer>
          <CardContainer onClick={() => setBlogCat(BlogCategories.BLOG_TECH)}>
            {BlogCategories.BLOG_TECH}
          </CardContainer>
          <CardContainer onClick={() => setBlogCat(BlogCategories.BLOG_VOTW)}>
            {BlogCategories.BLOG_VOTW}
          </CardContainer>
          <CardContainer onClick={() => setBlogCat(BlogCategories.BLOG_VARIA)}>
            {BlogCategories.BLOG_VARIA}
          </CardContainer>
        </SelectionCardContainer>
        <CategoryColumn category={blogCat} />
      </>
    );
  } else {
    return <div></div>;
  }
};

export default CategorySwitch;
