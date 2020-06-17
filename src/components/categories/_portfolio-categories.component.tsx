import { CardContainer, SelectionCardContainer } from './categories.styles';

import CategorySwitch from './category-switch.component';

import { useRouter } from 'next/router';
import { PortfolioCategories as Portfolio } from '@/components/types';

/* 
  This page handles the routing for all the blog and portfolio categories
  */

const PortfolioCategories: React.FC = () => {
  const router = useRouter();

  const handleClick = (location: Portfolio): void => {
    router.push(`/portfolio?cat=${location}`, undefined, { shallow: true });
  };

  return (
    <>
      <SelectionCardContainer>
        <CardContainer onClick={() => handleClick(Portfolio.PORTFOLIO_STILL)}>
          {Portfolio.PORTFOLIO_STILL}
        </CardContainer>
        <CardContainer onClick={() => handleClick(Portfolio.PORTFOLIO_MOVING)}>
          {Portfolio.PORTFOLIO_MOVING}
        </CardContainer>
        <CardContainer onClick={() => handleClick(Portfolio.PORTFOLIO_CLIENTS)}>
          {Portfolio.PORTFOLIO_CLIENTS}
        </CardContainer>
        <CardContainer onClick={() => handleClick(Portfolio.PORTFOLIO_DEV)}>
          {Portfolio.PORTFOLIO_DEV}
        </CardContainer>
      </SelectionCardContainer>
      <CategorySwitch />
    </>
  );
};

export default PortfolioCategories;
