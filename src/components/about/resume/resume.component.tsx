import { useState } from 'react';
import {
  Container,
  Section,
  ResumeContent,
  ToggleContainer,
  ToggleTitle,
} from './resume.styles';

import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

import SmoothCollapse from 'react-smooth-collapse';

const ResumeComponent: React.FC = () => {
  const [workEdOpen, setWorkEdOpen] = useState(false);
  const [toolsTechOpen, setToolsTechOpen] = useState(false);

  return (
    <Container>
      <Section>
        <ToggleContainer onClick={() => setWorkEdOpen(!workEdOpen)}>
          <ToggleTitle>education and work</ToggleTitle>
          {workEdOpen ? <FaAngleUp /> : <FaAngleDown />}
        </ToggleContainer>
        <SmoothCollapse expanded={workEdOpen}>
          <ResumeContent>
            <span>EDUCATION</span>
            <ul>
              <li>
                2020 - 2024: Master of Science, Data Science. University of
                Zurich
              </li>
              <br />
              <li>
                2015 - 2019: Bachelor of Arts, Media and Communication Science.
                University of Zurich
              </li>
              <br />
              <li>
                Various courses on Udemy: Javascript, Typescript, React.js,
                HTML, CSS
              </li>
            </ul>
            <span>WORK</span>
            <ul>
              <li>05.2018 - present: Digital Project Manager. Ringier AG</li>
              <br />
              <li>
                01.2013 - present: Freelance photographer & videographer.
                Self-employed
              </li>
              <br />
              <li>01.2017 - 04.2018: Project Management Support. Ringier AG</li>
              <br />
              <li>
                05.2016 - 04.2019: Video Journalist. Zürcher Oberländer Medien
                AG
              </li>
            </ul>
          </ResumeContent>
        </SmoothCollapse>
      </Section>
      <Section>
        <ToggleContainer onClick={() => setToolsTechOpen(!toolsTechOpen)}>
          <ToggleTitle>tools and technology</ToggleTitle>
          {toolsTechOpen ? <FaAngleUp /> : <FaAngleDown />}
        </ToggleContainer>
        <SmoothCollapse expanded={toolsTechOpen}>
          <ResumeContent>
            <p>Eric</p>
          </ResumeContent>
        </SmoothCollapse>
      </Section>
    </Container>
  );
};

export default ResumeComponent;
