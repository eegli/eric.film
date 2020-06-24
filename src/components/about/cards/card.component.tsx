import {
  CardContainer,
  Card,
  CardPicture,
  CardTitle,
  CardDescription,
  CardHeader,
} from './card.styles';

import SocialBar from '../social-bar/social-bar.component';

const CardComponent: React.FC = () => {
  return (
    <>
      <CardHeader>- meet the amazing team -</CardHeader>
      <CardContainer>
        <Card>
          <CardPicture>
            <source srcSet='/static/img/about-2.webp' type='image/webp' />
            <img src='/static/img/about-2.jpg' alt='logo' />
          </CardPicture>

          <CardTitle>eric</CardTitle>
          <CardDescription>
            <span>FOUNDER</span>
            <p>
              eric has been with us from the start. he is the founding father of
              eric.film and oversees all business activities as well as
              HR-related topics. Main responsibilities:
            </p>
            <ul>
              <li>project management</li>
              <li>photography</li>
            </ul>
            <SocialBar />
          </CardDescription>
        </Card>
        <Card>
          <CardPicture>
            <source srcSet='/static/img/about-1.webp' type='image/webp' />
            <img src='/static/img/about-1.jpg' alt='logo' />
          </CardPicture>
          <CardTitle>eric</CardTitle>
          <CardDescription>
            <span>LEAD DEVELOPER</span>
            <p>
              eric is our self-taught javascript engineer. he mostly talks about
              "react" but as long as our website looks good, we don't really
              care. Main responsibilities:
            </p>
            <ul>
              <li>eric.film development</li>
              <li>blogging</li>
            </ul>
            <SocialBar />
          </CardDescription>
        </Card>
        <Card>
          <CardPicture>
            <source srcSet='/static/img/about-3.webp' type='image/webp' />
            <img src='/static/img/about-3.jpg' alt='logo' />
          </CardPicture>
          <CardTitle>eric</CardTitle>
          <CardDescription>
            <span>INTERN</span>
            <p>
              eric has bachelor of arts in communication science so we let him
              do all the client talking. other than that, we only really see him
              at after-work drinks. Main responsibilities:
            </p>
            <ul>
              <li>none</li>
              <br />
            </ul>
            <SocialBar />
          </CardDescription>
        </Card>
      </CardContainer>
    </>
  );
};

export default CardComponent;
