import { AboutContainer } from './about.styles';
import CardComponent from './cards/card.component';
import ResumeComponent from './resume/resume.component';

const About: React.FC = () => {
  return (
    <>
      <AboutContainer>
        <CardComponent />
        <hr style={{ width: '80%' }} />
        <ResumeComponent />
      </AboutContainer>
    </>
  );
};

export default About;
