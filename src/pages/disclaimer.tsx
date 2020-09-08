import CustomHead from '@/components/custom-head/custom-head.component';
import Disclaimer from '@/components/disclaimer/disclaimer.component';
import LayoutContainer from '@/shared/layout/layout.container';
import { SEO_DISCLAIMER_META as meta } from '@/src/config';

const DisclaimerPage: React.FC = () => {
  return (
    <>
      <CustomHead
        title={meta.title}
        description={meta.description}
        ogImage={meta.image}
      />
      <LayoutContainer pageBreakpoint='small'>
        <Disclaimer />
      </LayoutContainer>
    </>
  );
};

export default DisclaimerPage;
