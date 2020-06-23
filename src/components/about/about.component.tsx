import React from 'react';
import {
  AboutContainer,
  CardContainer,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
} from './about.styles';

const About: React.FC = () => {
  return (
    <AboutContainer>
      <CardContainer>
        <Card>
          <CardImage src='/static/img/about-1.jpg' />
          <CardTitle>eric</CardTitle>
          <CardDescription>
            <span>FOUNDER</span> <br />
            eric has been with us from the start. he is the founding father of
            eric.film and oversees all business activities as well as HR-related
            topics.
            <br />
            Main responsibilities:
            <ul>
              <li>project management</li>
              <li>photography</li>
            </ul>
          </CardDescription>
        </Card>
        <Card>
          <CardImage src='/static/img/about-1.jpg' />
          <CardTitle>eric</CardTitle>
          <CardDescription>
            <span>LEAD DEVELOPER</span> <br />
            eric is our self-taught javascript engineer. he mostly talks about
            "react" but as long as our website looks good, we don't really care.
            <br />
            Main responsibilities:
            <ul>
              <li>eric.film development</li>
              <li>blogging</li>
            </ul>
          </CardDescription>
        </Card>
        <Card>
          <CardImage src='/static/img/about-1.jpg' />
          <CardTitle>eric</CardTitle>
          <CardDescription>
            <span>TRAINEE</span> <br /> eric has a minor in communication
            science so we let him do all the client talking. other than that, we
            only really see him at after-work drinks. <br />
            Main responsibilities:
            <ul>
              <li>none</li>
            </ul>
            <br />
          </CardDescription>
        </Card>
      </CardContainer>
    </AboutContainer>
  );
};

export default About;
