import {
  DevCategory,
  BlogCategory,
  MovingCategory,
  StillCategory,
  ClientCategory,
} from './card-categories/index';

import { useRouter } from 'next/router';

import { BlogCategories, PortfolioCategories } from '@/components/types';

const CategoryColumn: React.FC = () => {
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
    // Blog categories need a filter since they use the same <BlogCategory /> component
    case BlogCategories.BLOG_ALL:
      return <BlogCategory />;
    case BlogCategories.BLOG_TECH:
      return <BlogCategory filter={BlogCategories.BLOG_TECH} />;
    case BlogCategories.BLOG_VOTW:
      return <BlogCategory filter={BlogCategories.BLOG_VOTW} />;
    case BlogCategories.BLOG_VARIA:
      return <BlogCategory filter={BlogCategories.BLOG_VARIA} />;
    default:
      return (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          what are you trying to do, there is no such category... 🤨
          <br /> click on a category above to show some content! 🤩
        </div>
      );
  }
};

export default CategoryColumn;
