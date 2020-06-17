import { CardContainer, SelectionCardContainer } from './_categories.styles';
import { useState, useEffect } from 'react';
import CategorySwitch from './switch-categories/category-switch.component';
import Router, { useRouter } from 'next/router';
import { BlogCategories as B } from '@/components/types';

/* 
This page handles the routing for all the blog and portfolio categories
*/

const BlogCategories: React.FC = () => {
  const slug = '/blog?cat=';

  const [activeCat, setActiveCat] = useState(`${slug}${B.BLOG_ALL}`);
  const router = useRouter();

  const handleBlogClick = (location: B): void => {
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
          onClick={() => handleBlogClick(B.BLOG_ALL)}
          active={activeCat === `${slug}${B.BLOG_ALL}`}>
          {B.BLOG_ALL}
        </CardContainer>
        <CardContainer
          onClick={() => handleBlogClick(B.BLOG_TECH)}
          active={activeCat === `${slug}${B.BLOG_TECH}`}>
          {B.BLOG_TECH}
        </CardContainer>
        <CardContainer
          onClick={() => handleBlogClick(B.BLOG_VOTW)}
          active={activeCat === `${slug}${B.BLOG_VOTW}`}>
          {B.BLOG_VOTW}
        </CardContainer>
        <CardContainer
          onClick={() => handleBlogClick(B.BLOG_VARIA)}
          active={activeCat === `${slug}${B.BLOG_VARIA}`}>
          {B.BLOG_VARIA}
        </CardContainer>
      </SelectionCardContainer>
      <CategorySwitch />
    </>
  );
};

export default BlogCategories;
