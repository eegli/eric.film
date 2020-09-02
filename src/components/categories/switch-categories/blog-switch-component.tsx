import { BlogTypeAll } from '@/components/types';
import { BlogpostOrderByInput, BlogType } from '@/src/generated/graphql';
import { useRouter } from 'next/router';
import { BlogCategory } from '../card-categories/index';

type Props = {
  orderBy: BlogpostOrderByInput;
};

const BlogSwitch: React.FC<Props> = ({ orderBy }) => {
  const router = useRouter();
  switch (router.query.cat) {
    case BlogTypeAll.All:
      return <BlogCategory orderBy={orderBy} />;
    case BlogType.Tech:
      return <BlogCategory filter={BlogType.Tech} orderBy={orderBy} />;
    case BlogType.Votw:
      return <BlogCategory filter={BlogType.Votw} orderBy={orderBy} />;
    case BlogType.Varia:
      return <BlogCategory filter={BlogType.Varia} orderBy={orderBy} />;

    default:
      return <BlogCategory orderBy={orderBy} />;
  }
};

export default BlogSwitch;
