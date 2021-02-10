import SocialBar from '../social-bar/social-bar.component';
import {
  Card,
  CardDescription,
  CardHeader,
  CardPicture,
  CardTitle,
  CardWrapper,
} from './card.styles';

const CardComponent: React.FC = () => (
  <>
    <CardHeader>{' meet the amazing team '}</CardHeader>
    <CardWrapper>
      <Card>
        <CardPicture>
          <source srcSet='/img/about/about-2.webp' type='image/webp' />
          <img src='/img/about/about-2.jpg' alt='logo' />
        </CardPicture>

        <CardTitle>eric</CardTitle>
        <CardDescription>
          <span>FOUNDER</span>
          <p>
            eric has been with us from the start. he is the founding father of
            eric.film and oversees all business activities as well as HR-related
            topics. main responsibilities:
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
          <source srcSet='/img/about/about-1.webp' type='image/webp' />
          <img src='/img/about/about-1.jpg' alt='logo' />
        </CardPicture>
        <CardTitle>eric</CardTitle>
        <CardDescription>
          <span>LEAD DEVELOPER</span>
          <p>
            eric is our junior engineer. he mostly talks about "react" and
            "python" but as long as our website looks good, we don't really
            care. main responsibilities:
          </p>
          <br />
          <ul>
            <li>eric.film development</li>
            <li>blogging</li>
          </ul>
          <SocialBar />
        </CardDescription>
      </Card>
      <Card>
        <CardPicture>
          <source srcSet='/img/about/about-3.webp' type='image/webp' />
          <img src='/img/about/about-3.jpg' alt='logo' />
        </CardPicture>
        <CardTitle>eric</CardTitle>
        <CardDescription>
          <span>INTERN</span>
          <p>
            eric has bachelor of arts in communication science so we let him
            talk to our clients. other than that, we only really see him at
            after-work drinks. main responsibilities:
          </p>
          <ul>
            <li>none</li>
            <br />
          </ul>
          <SocialBar />
        </CardDescription>
      </Card>
    </CardWrapper>
  </>
);

export default CardComponent;
