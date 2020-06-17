import { useState } from 'react';
import {
  CardContainer,
  SelectionCardContainer,
} from './category-switch.styles';

import CategoryColumn from './category-column.component';

import { useRouter } from 'next/router';
import { BlogCategories, PortfolioCategories } from '@/components/types';
export type Props = {
  blogOrPortfolio: 'blog' | 'portfolio';
};

/* 
This page handles the routing for all the blog and portfolio categories
*/

const CategorySwitch: React.FC<Props> = ({ blogOrPortfolio }) => {
  const router = useRouter();

  const handleClick = (
    location: PortfolioCategories | BlogCategories
  ): void => {
    router.push(`/portfolio?cat=${location}`, undefined, { shallow: true });
  };

  if (blogOrPortfolio === 'portfolio') {
    return (
      <>
        <SelectionCardContainer>
          <CardContainer
            onClick={() => handleClick(PortfolioCategories.PORTFOLIO_STILL)}>
            {PortfolioCategories.PORTFOLIO_STILL}
          </CardContainer>
          <CardContainer
            onClick={() => handleClick(PortfolioCategories.PORTFOLIO_MOVING)}>
            {PortfolioCategories.PORTFOLIO_MOVING}
          </CardContainer>
          <CardContainer
            onClick={() => handleClick(PortfolioCategories.PORTFOLIO_CLIENTS)}>
            {PortfolioCategories.PORTFOLIO_CLIENTS}
          </CardContainer>
          <CardContainer
            onClick={() => handleClick(PortfolioCategories.PORTFOLIO_DEV)}>
            {PortfolioCategories.PORTFOLIO_DEV}
          </CardContainer>
        </SelectionCardContainer>
        <CategoryColumn />
      </>
    );
  } else if (blogOrPortfolio === 'blog') {
    return (
      <>
        <SelectionCardContainer>
          <CardContainer onClick={() => handleClick(BlogCategories.BLOG_ALL)}>
            {BlogCategories.BLOG_ALL}
          </CardContainer>
          <CardContainer onClick={() => handleClick(BlogCategories.BLOG_TECH)}>
            {BlogCategories.BLOG_TECH}
          </CardContainer>
          <CardContainer onClick={() => handleClick(BlogCategories.BLOG_VOTW)}>
            {BlogCategories.BLOG_VOTW}
          </CardContainer>
          <CardContainer onClick={() => handleClick(BlogCategories.BLOG_VARIA)}>
            {BlogCategories.BLOG_VARIA}
          </CardContainer>
        </SelectionCardContainer>
        <CategoryColumn />
      </>
    );
  } else {
    return <div></div>;
  }
};

export default CategorySwitch;
