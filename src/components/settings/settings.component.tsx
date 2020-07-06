import { InfoContainer } from './settings.styles';
import { Sh2 } from '@/components/shared/headings.styles';

const Settings: React.FC = () => {
  return (
    <>
      <InfoContainer>
        <a id='privacy' />
        <Sh2 settings>Privacy</Sh2>
        <p>
          eric.film uses cookies to optimize your experience.
          <a href='https://www.allaboutcookies.org/cookies/' target='_blank'>
            What are cookies?
          </a>
          <br />
          This website does not process, save or sell any personal data for
          commercial purposes. I use Google Analytics to get insights about
          where my visitors come from and what pages they visit. This may
          include information about your approximate geographical location or
          the device you are using. This is purely to make sure that eric.film
          continues to provide the content that its visitors enjoy and that the
          design keeps up with the technical requirements. All data is processed
          anonymously and not shared with any 3rd party clients. I do not and
          will never promote any advertisements. <br />
        </p>
      </InfoContainer>
      <InfoContainer>
        <a id='imprint' />
        <Sh2 settings>Imprint</Sh2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </InfoContainer>
      <InfoContainer>
        <a id='acknowledgements' />
        <Sh2 settings>Acknowledgements</Sh2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </InfoContainer>
    </>
  );
};

export default Settings;
