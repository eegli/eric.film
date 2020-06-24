import { Sh1 } from '@/shared/headings.styles';
import LayouContainer from '@/shared/layout/layout.container';
import About from '@/components/about/about.component';

const AboutPage: React.FC = () => {
  return (
    <LayouContainer page='about'>
      <Sh1>about</Sh1>
      <About />
    </LayouContainer>
  );
};

export default AboutPage;
