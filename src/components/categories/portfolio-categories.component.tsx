import { CardContainer, SelectionCardContainer } from './_categories.styles';
import CategorySwitch from './switch-categories/category-switch.component';
import { useRouter } from 'next/router';
import { PortfolioCategories as P } from '@/components/types';
import { useActiveUrl } from './hook/useActiveCat';

/* 
  This page handles the routing for all the blog and portfolio categories
  */

const PortfolioCategories: React.FC = () => {
  const slug = '/portfolio?cat=';
  const router = useRouter();
  const activeUrl = useActiveUrl(P.PORTFOLIO_STILL);

  const handleClick = (location: P): void => {
    router.push(`${slug}${location}`, undefined, { shallow: true });
  };

  return (
    <>
      <SelectionCardContainer>
        <CardContainer
          onClick={() => handleClick(P.PORTFOLIO_STILL)}
          active={activeUrl === `${slug}${P.PORTFOLIO_STILL}`}>
          {P.PORTFOLIO_STILL}
        </CardContainer>
        <CardContainer
          onClick={() => handleClick(P.PORTFOLIO_MOVING)}
          active={activeUrl === `${slug}${P.PORTFOLIO_MOVING}`}>
          {P.PORTFOLIO_MOVING}
        </CardContainer>
        <CardContainer
          onClick={() => handleClick(P.PORTFOLIO_CLIENTS)}
          active={activeUrl === `${slug}${P.PORTFOLIO_CLIENTS}`}>
          {P.PORTFOLIO_CLIENTS}
        </CardContainer>
        <CardContainer
          onClick={() => handleClick(P.PORTFOLIO_DEV)}
          active={activeUrl === `${slug}${P.PORTFOLIO_DEV}`}>
          {P.PORTFOLIO_DEV}
        </CardContainer>
      </SelectionCardContainer>
      <CategorySwitch />
    </>
  );
};

export default PortfolioCategories;
