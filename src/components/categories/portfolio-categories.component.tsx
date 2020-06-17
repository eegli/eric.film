import { useState, useEffect } from 'react';
import { CardContainer, SelectionCardContainer } from './_categories.styles';
import CategorySwitch from './switch-categories/category-switch.component';
import Router, { useRouter } from 'next/router';
import { PortfolioCategories as P } from '@/components/types';

/* 
  This page handles the routing for all the blog and portfolio categories
  */

const PortfolioCategories: React.FC = () => {
  const slug = '/portfolio?cat=';

  const [activeCat, setActiveCat] = useState(`${slug}${P.PORTFOLIO_STILL}`);
  const router = useRouter();

  const handleClick = (location: P): void => {
    router.push(`${slug}${location}`, undefined, { shallow: true });
  };

  // We need to cleanup after router events: https://nextjs.org/docs/api-reference/next/router
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setActiveCat(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <SelectionCardContainer>
        <CardContainer
          onClick={() => handleClick(P.PORTFOLIO_STILL)}
          active={activeCat === `${slug}${P.PORTFOLIO_STILL}`}>
          {P.PORTFOLIO_STILL}
        </CardContainer>
        <CardContainer
          onClick={() => handleClick(P.PORTFOLIO_MOVING)}
          active={activeCat === `${slug}${P.PORTFOLIO_MOVING}`}>
          {P.PORTFOLIO_MOVING}
        </CardContainer>
        <CardContainer
          onClick={() => handleClick(P.PORTFOLIO_CLIENTS)}
          active={activeCat === `${slug}${P.PORTFOLIO_CLIENTS}`}>
          {P.PORTFOLIO_CLIENTS}
        </CardContainer>
        <CardContainer
          onClick={() => handleClick(P.PORTFOLIO_DEV)}
          active={activeCat === `${slug}${P.PORTFOLIO_DEV}`}>
          {P.PORTFOLIO_DEV}
        </CardContainer>
      </SelectionCardContainer>
      <CategorySwitch />
    </>
  );
};

export default PortfolioCategories;
