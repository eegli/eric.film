import { PortfolioCategories } from '@/components/types';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import {
  ClientCategory,
  DevCategory,
  MovingCategory,
  StillCategory,
} from '../card-common/index';

const fadeIn = keyframes`{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`;

// TODO
export const Fader = styled.div`
  animation: ${fadeIn} 5s;
`;

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
    // If you access <baseUrl>/portfolio, you get the "still category" which is the main category
    default:
      return <StillCategory />;
  }
};

export default PortfolioSwitch;
