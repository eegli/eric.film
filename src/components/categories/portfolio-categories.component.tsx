import { CardContainer, SelectionCardContainer } from './_categories.styles';
import CategorySwitch from './switch-categories/category-switch.component';
import { PortfolioCategories as P } from '@/components/types';
import { useActiveUrl } from './hooks/useActiveCat';
import Link from 'next/link';

/* 
  This page handles the routing for all the blog and portfolio categories
  */

const PortfolioCategories: React.FC = () => {
  const slug = '/portfolio?cat=';
  const activeUrl = useActiveUrl(P.PORTFOLIO_STILL);

  return (
    <>
      <SelectionCardContainer>
        <Link href={`${slug}${P.PORTFOLIO_STILL}`} shallow passHref>
          <CardContainer active={activeUrl === `${slug}${P.PORTFOLIO_STILL}`}>
            {P.PORTFOLIO_STILL}
          </CardContainer>
        </Link>
        <Link href={`${slug}${P.PORTFOLIO_MOVING}`} shallow passHref>
          <CardContainer active={activeUrl === `${slug}${P.PORTFOLIO_MOVING}`}>
            {P.PORTFOLIO_MOVING}
          </CardContainer>
        </Link>
        <Link href={`${slug}${P.PORTFOLIO_CLIENTS}`} shallow passHref>
          <CardContainer active={activeUrl === `${slug}${P.PORTFOLIO_CLIENTS}`}>
            {P.PORTFOLIO_CLIENTS}
          </CardContainer>
        </Link>
        <Link href={`${slug}${P.PORTFOLIO_DEV}`} shallow passHref>
          <CardContainer active={activeUrl === `${slug}${P.PORTFOLIO_DEV}`}>
            {P.PORTFOLIO_DEV}
          </CardContainer>
        </Link>
      </SelectionCardContainer>
      <CategorySwitch />
    </>
  );
};

export default PortfolioCategories;
