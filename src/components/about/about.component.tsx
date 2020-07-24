import { AboutContainer } from './about.styles';
import Cards from './cards/card.component';
import Resume from './resume/resume.component';

const About: React.FC = () => {
  return (
    <>
      <AboutContainer>
        <Cards />
        <hr style={{ width: '80%' }} />
        <Resume />
      </AboutContainer>
    </>
  );
};

export default About;
