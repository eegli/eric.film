import BlogContainer from '@/components/blog/blog-container.component';
import Footer from '@/components/footer/footer.component';
import LayoutContainer from '@/components/shared/layout/layout.container';

type Props = {
  data: any;
};

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <LayoutContainer breakpoint='small'>
        <BlogContainer />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default IndexPage;
