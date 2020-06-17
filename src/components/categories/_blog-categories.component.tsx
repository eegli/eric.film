import { CardContainer, SelectionCardContainer } from './categories.styles';

import CategorySwitch from './category-switch.component';

import { useRouter } from 'next/router';
import { BlogCategories as Blog } from '@/components/types';

/* 
This page handles the routing for all the blog and portfolio categories
*/

const BlogCategories: React.FC = () => {
  const router = useRouter();

  const handleBlogClick = (location: Blog): void => {
    router.push(`/blog?cat=${location}`, undefined, { shallow: true });
  };

  return (
    <>
      <SelectionCardContainer>
        <CardContainer onClick={() => handleBlogClick(Blog.BLOG_ALL)}>
          {Blog.BLOG_ALL}
        </CardContainer>
        <CardContainer onClick={() => handleBlogClick(Blog.BLOG_TECH)}>
          {Blog.BLOG_TECH}
        </CardContainer>
        <CardContainer onClick={() => handleBlogClick(Blog.BLOG_VOTW)}>
          {Blog.BLOG_VOTW}
        </CardContainer>
        <CardContainer onClick={() => handleBlogClick(Blog.BLOG_VARIA)}>
          {Blog.BLOG_VARIA}
        </CardContainer>
      </SelectionCardContainer>
      <CategorySwitch />
    </>
  );
};

export default BlogCategories;
