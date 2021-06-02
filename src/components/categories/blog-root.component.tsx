import {
  BlogpostOrderByInput,
  BlogType,
  BlogTypeAll,
} from '@/components/types';
import Link from 'next/link';
import { useState } from 'react';
import { useActiveCat } from '../hooks/useActiveCat';
import {
  CardContainer,
  CategoryContainer,
  SelectionCardContainer,
} from './root.styles';
import BlogSwitch from './routes/blog-routes.component';

/* 
This page handles the routing for all the blog and portfolio categories
*/

const BlogCategories: React.FC = () => {
  const [orderBy, setOrderBy] = useState<BlogpostOrderByInput>(
    BlogpostOrderByInput.CreatedAtDesc,
  );
  const slug = '/blog?cat=';
  const activeCat = useActiveCat(BlogTypeAll.All, slug);

  return (
    <>
      <CategoryContainer>
        <SelectionCardContainer>
          <Link href={`${slug}${BlogTypeAll.All}`} shallow passHref>
            <CardContainer active={activeCat === BlogTypeAll.All}>
              {BlogTypeAll.All}
            </CardContainer>
          </Link>
          <Link href={`${slug}${BlogType.Tech}`} shallow passHref>
            <CardContainer active={activeCat === BlogType.Tech}>
              {BlogType.Tech}
            </CardContainer>
          </Link>
          <Link href={`${slug}${BlogType.Votw}`} shallow passHref>
            <CardContainer active={activeCat === BlogType.Votw}>
              {BlogType.Votw}
            </CardContainer>
          </Link>
          <Link href={`${slug}${BlogType.Varia}`} shallow passHref>
            <CardContainer active={activeCat === BlogType.Varia}>
              {BlogType.Varia}
            </CardContainer>
          </Link>
        </SelectionCardContainer>
        {/*         <SortButtonContainer>
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
        </SortButtonContainer> */}
      </CategoryContainer>
      <BlogSwitch orderBy={orderBy} />
    </>
  );
};

export default BlogCategories;
