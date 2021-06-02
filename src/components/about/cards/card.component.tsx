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
            eric.film and oversees all business activities as well as hr-related
            topics. <br />
            his main job is to tell people he is the founder without actually
            doing some work. <br />
            main responsibilities:
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
            eric is our nerd and mostly talks about that "typescript" thing. he
            works as a software engineer at ringier and tells his mom that{' '}
            <i>it's like making servers talk to each other</i>.
            <br /> as long as our website looks good, we do not really care.
            <br /> main responsibilities:
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
          <source srcSet='/img/about/about-3.webp' type='image/webp' />
          <img src='/img/about/about-3.jpg' alt='logo' />
        </CardPicture>
        <CardTitle>eric</CardTitle>
        <CardDescription>
          <span>INTERN</span>
          <p>
            after getting his bachelor of arts in communication science in 2019,
            eric came to realize he is more interested in making beautiful excel
            charts rather than writing. <br />
            he is currently pursuing a master in data science at the university
            of zurich. <br />
            main responsibilities:
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
