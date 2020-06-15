import React from 'react';
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

const CategorySwitch: React.FC<Props> = ({ blogOrPortfolio }) => {
  const router = useRouter();

  if (blogOrPortfolio === 'portfolio') {
    return (
      <>
        <SelectionCardContainer>
          <CardContainer
            onClick={() =>
              router.push(
                `/portfolio?cat=${PortfolioCategories.PORTFOLIO_STILL}`,
                undefined,
                { shallow: true }
              )
            }>
            {PortfolioCategories.PORTFOLIO_STILL}
          </CardContainer>
          <CardContainer
            onClick={() =>
              router.push(
                `/portfolio?cat=${PortfolioCategories.PORTFOLIO_MOVING}`,
                undefined,
                { shallow: true }
              )
            }>
            {PortfolioCategories.PORTFOLIO_MOVING}
          </CardContainer>
          <CardContainer
            onClick={() =>
              router.push(
                `/portfolio?cat=${PortfolioCategories.PORTFOLIO_CLIENTS}`,
                undefined,
                { shallow: true }
              )
            }>
            {PortfolioCategories.PORTFOLIO_CLIENTS}
          </CardContainer>
          <CardContainer
            onClick={() =>
              router.push(
                `/portfolio?cat=${PortfolioCategories.PORTFOLIO_DEV}`,
                undefined,
                {
                  shallow: true,
                }
              )
            }>
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
          <CardContainer
            onClick={() =>
              router.push(`/blog?cat=${BlogCategories.BLOG_ALL}`, undefined, {
                shallow: true,
              })
            }>
            {BlogCategories.BLOG_ALL}
          </CardContainer>
          <CardContainer
            onClick={() =>
              router.push(`/blog?cat=${BlogCategories.BLOG_TECH}`, undefined, {
                shallow: true,
              })
            }>
            {BlogCategories.BLOG_TECH}
          </CardContainer>
          <CardContainer
            onClick={() =>
              router.push(`/blog?cat=${BlogCategories.BLOG_VOTW}`, undefined, {
                shallow: true,
              })
            }>
            {BlogCategories.BLOG_VOTW}
          </CardContainer>
          <CardContainer
            onClick={() =>
              router.push(`/blog?cat=${BlogCategories.BLOG_VARIA}`, undefined, {
                shallow: true,
              })
            }>
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
