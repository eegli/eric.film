import { PortfolioCategories } from '@/components/types';
import { useRouter } from 'next/router';
import {
  ClientCategory,
  DevCategory,
  MovingCategory,
  StillCategory,
} from '../card-categories/index';

const PortfolioSwitch: React.FC = () => {
  const router = useRouter();
  switch (router.query.cat) {
    case PortfolioCategories.PORTFOLIO_STILL:
      return <StillCategory />;
    case PortfolioCategories.PORTFOLIO_MOVING:
      return <MovingCategory />;
    case PortfolioCategories.PORTFOLIO_CLIENTS:
      return <ClientCategory />;
    case PortfolioCategories.PORTFOLIO_DEV:
      return <DevCategory />;
    default:
      return <StillCategory />;
  }
};

export default PortfolioSwitch;
