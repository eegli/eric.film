import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import SmoothCollapse from 'react-smooth-collapse';
import {
  ResumeContent,
  ResumeWrapper,
  Section,
  ToggleContainer,
  ToggleTitle,
} from './resume.styles';

const ResumeComponent: React.FC = () => {
  const [workEdOpen, setWorkEdOpen] = useState<boolean>(false);
  const [toolsTechOpen, setToolsTechOpen] = useState<boolean>(false);

  return (
    <ResumeWrapper>
      <Section>
        <ToggleContainer onClick={() => setWorkEdOpen(!workEdOpen)}>
          <ToggleTitle>education - work</ToggleTitle>
          {workEdOpen ? <FaAngleUp /> : <FaAngleDown />}
        </ToggleContainer>
        <SmoothCollapse expanded={workEdOpen}>
          <ResumeContent>
            <span>EDUCATION</span>
            <div>
              <span>2020 - 2024</span>
              <p>Master of Science, Data Science. University of Zurich</p>
              <span>2015 - 2019</span>
              <p>
                Bachelor of Arts, Media and Communication Science. University of
                Zurich
              </p>
            </div>
            <span>WORK</span>
            <div>
              <span>05.2018 - present</span>
              <p>Digital Project Manager. Ringier AG</p>
              <span>01.2013 - present</span>
              <p>Freelance photographer & videographer. Self-employed</p>
              <span>01.2017 - 04.2018</span>
              <p>Project Management Support. Ringier AG</p>
              <span>05.2016 - 04.2019</span>
              <p>Video Journalist. Zürcher Oberländer Medien AG</p>
            </div>
          </ResumeContent>
        </SmoothCollapse>
      </Section>
      <Section>
        <ToggleContainer onClick={() => setToolsTechOpen(!toolsTechOpen)}>
          <ToggleTitle>tools - technology</ToggleTitle>
          {toolsTechOpen ? <FaAngleUp /> : <FaAngleDown />}
        </ToggleContainer>
        <SmoothCollapse expanded={toolsTechOpen}>
          <ResumeContent>
            <span>DEVELOPMENT</span>
            <div>
              <ul>
                <li>Javascript (ES5, ES6)</li>
                <li>Typescript</li>
                <li>Next.js</li>
                <li>React.js, React native</li>
                <li>Redux, React Redux</li>
                <li>CSS in JS</li>
                <li>HTML5, CSS3</li>
                <li>GraphQL, REST</li>
                <li>Google Firebase</li>
                <li>Git</li>
                <li>Node.js (currently learning)</li>
              </ul>
            </div>
            <span>MISC</span>
            <div>
              <ul>
                <li>Agile (Scrum & Kanban)</li>
                <li>Adobe Creative Suite</li>
              </ul>
            </div>
          </ResumeContent>
        </SmoothCollapse>
      </Section>
    </ResumeWrapper>
  );
};

export default ResumeComponent;
