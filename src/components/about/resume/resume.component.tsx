import { useState } from 'react';
import { ResumeContainer, ResumeSection, ResumeContent } from './resume.styles';

const ResumeComponent: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState({
    work: false,
    tools: false,
    education: false,
  });

  return (
    <ResumeContainer>
      <ResumeSection>
        <button
          onClick={() =>
            setResumeOpen({ ...resumeOpen, work: !resumeOpen.work })
          }>
          show work
        </button>
        <ResumeContent expanded={resumeOpen.work}>
          <p>Eric</p>
        </ResumeContent>
      </ResumeSection>
    </ResumeContainer>
  );
};

export default ResumeComponent;
