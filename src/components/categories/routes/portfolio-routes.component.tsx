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

const Fader = styled.div`
  animation: ${fadeIn} 2s;
`;

const PortfolioSwitch: React.FC = () => {
  const router = useRouter();
  switch (router.query.cat) {
    case PortfolioCategories.PORTFOLIO_STILL:
      return (
        <Fader>
          <StillCategory />
        </Fader>
      );
    case PortfolioCategories.PORTFOLIO_MOVING:
      return (
        <Fader>
          <MovingCategory />
        </Fader>
      );
    case PortfolioCategories.PORTFOLIO_CLIENTS:
      return (
        <Fader>
          <ClientCategory />
        </Fader>
      );
    case PortfolioCategories.PORTFOLIO_DEV:
      return (
        <Fader>
          <DevCategory />
        </Fader>
      );
    // If you access <baseUrl>/portfolio, you get the "still category" which is the main category
    default:
      return (
        <Fader>
          <StillCategory />
        </Fader>
      );
  }
};

export default PortfolioSwitch;
