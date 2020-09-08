import Disclaimer from '@/components/disclaimer/disclaimer.component';
import LayoutContainer from '@/shared/layout/layout.container';

const DisclaimerPage: React.FC = () => {
  return (
    <LayoutContainer pageBreakpoint='small'>
      <Disclaimer />
    </LayoutContainer>
  );
};

export default DisclaimerPage;
