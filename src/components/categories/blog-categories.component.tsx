import { CardContainer, SelectionCardContainer } from './_categories.styles';
import CategorySwitch from './switch-categories/category-switch.component';
import { useRouter } from 'next/router';
import { BlogCategories as B } from '@/components/types';
import { useActiveUrl } from './hook/useActiveCat';

/* 
This page handles the routing for all the blog and portfolio categories
*/

const BlogCategories: React.FC = () => {
  const slug = '/blog?cat=';
  const router = useRouter();
  const activeUrl = useActiveUrl(B.BLOG_ALL);
  const handleBlogClick = (location: B): void => {
    router.push(`${slug}${location}`, undefined, { shallow: true });
  };

  return (
    <>
      <SelectionCardContainer>
        <CardContainer
          onClick={() => handleBlogClick(B.BLOG_ALL)}
          active={activeUrl === `${slug}${B.BLOG_ALL}`}>
          {B.BLOG_ALL}
        </CardContainer>
        <CardContainer
          onClick={() => handleBlogClick(B.BLOG_TECH)}
          active={activeUrl === `${slug}${B.BLOG_TECH}`}>
          {B.BLOG_TECH}
        </CardContainer>
        <CardContainer
          onClick={() => handleBlogClick(B.BLOG_VOTW)}
          active={activeUrl === `${slug}${B.BLOG_VOTW}`}>
          {B.BLOG_VOTW}
        </CardContainer>
        <CardContainer
          onClick={() => handleBlogClick(B.BLOG_VARIA)}
          active={activeUrl === `${slug}${B.BLOG_VARIA}`}>
          {B.BLOG_VARIA}
        </CardContainer>
      </SelectionCardContainer>
      <CategorySwitch />
    </>
  );
};

export default BlogCategories;
