import { AboutContainer } from './about.styles';
import CardComponent from './cards/card.component';
import ResumeComponent from './resume/resume.component';

const About: React.FC = () => {
  return (
    <>
      <AboutContainer>
        <CardComponent data-testid='card-component' />
        <hr style={{ width: '80%' }} />
        <ResumeComponent data-testid='resume-component' />
      </AboutContainer>
    </>
  );
};

export default About;
