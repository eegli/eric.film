import {
  BlogpostOrderByInput,
  BlogType,
  BlogTypeAll,
} from '@/components/types';
import Link from 'next/link';
import { useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { useActiveUrl } from '../../hooks/useActiveUrl';
import BlogSwitch from '../switch-categories/blog-switch.component';
import {
  CardContainer,
  CategoryContainer,
  SelectionCardContainer,
  SortButton,
  SortButtonContainer,
} from './categories.styles';

/* 
This page handles the routing for all the blog and portfolio categories
*/

const BlogCategories: React.FC = () => {
  const [orderBy, setOrderBy] = useState<BlogpostOrderByInput>(
    BlogpostOrderByInput.CreatedAtDesc,
  );
  const slug = '/blog?cat=';
  const activeUrl = useActiveUrl(BlogTypeAll.All);

  return (
    <>
      <CategoryContainer sticky>
        <SelectionCardContainer sticky>
          <Link href={`${slug}${BlogTypeAll.All}`} shallow passHref>
            <CardContainer active={activeUrl === `${slug}${BlogTypeAll.All}`}>
              {BlogTypeAll.All}
            </CardContainer>
          </Link>
          <Link href={`${slug}${BlogType.Tech}`} shallow passHref>
            <CardContainer active={activeUrl === `${slug}${BlogType.Tech}`}>
              {BlogType.Tech}
            </CardContainer>
          </Link>
          <Link href={`${slug}${BlogType.Votw}`} shallow passHref>
            <CardContainer active={activeUrl === `${slug}${BlogType.Votw}`}>
              {BlogType.Votw}
            </CardContainer>
          </Link>
          <Link href={`${slug}${BlogType.Varia}`} shallow passHref>
            <CardContainer active={activeUrl === `${slug}${BlogType.Varia}`}>
              {BlogType.Varia}
            </CardContainer>
          </Link>
        </SelectionCardContainer>
        <SortButtonContainer>
          {orderBy === BlogpostOrderByInput.CreatedAtDesc ? (
            <>
              <FaSort />
              <SortButton
                onClick={() => setOrderBy(BlogpostOrderByInput.CreatedAtAsc)}>
                show oldest
              </SortButton>
            </>
          ) : (
            <>
              <FaSort />
              <SortButton
                onClick={() => setOrderBy(BlogpostOrderByInput.CreatedAtDesc)}>
                show latest
              </SortButton>
            </>
          )}
        </SortButtonContainer>
      </CategoryContainer>
      <BlogSwitch orderBy={orderBy} />
    </>
  );
};

export default BlogCategories;
