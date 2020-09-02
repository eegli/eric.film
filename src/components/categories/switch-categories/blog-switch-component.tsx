import { BlogTypeAll } from '@/components/types';
import { BlogpostOrderByInput, BlogType } from '@/src/generated/graphql';
import { useRouter } from 'next/router';
import { BlogCategory } from '../card-categories/index';

type Props = {
  sortBy: BlogpostOrderByInput;
};

const BlogSwitch: React.FC<Props> = ({ sortBy }) => {
  const router = useRouter();
  switch (router.query.cat) {
    case BlogTypeAll.All:
      return <BlogCategory sortBy={sortBy} />;
    case BlogType.Tech:
      return <BlogCategory filter={BlogType.Tech} sortBy={sortBy} />;
    case BlogType.Votw:
      return <BlogCategory filter={BlogType.Votw} sortBy={sortBy} />;
    case BlogType.Varia:
      return <BlogCategory filter={BlogType.Varia} sortBy={sortBy} />;

    default:
      return <BlogCategory sortBy={sortBy} />;
  }
};

export default BlogSwitch;
