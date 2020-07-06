import { InfoContainer } from './settings.styles';
import Markdown from '@/components/blog/markdown/blog-markdown.component';
import Acknowledgements from './__content__/acknowledgements.md';
import Privacy from './__content__/privacy.md';
import Imprint from './__content__/imprint.md';

const Settings: React.FC = () => {
  return (
    <>
      <InfoContainer>
        <a id='privacy' />
        <Markdown source={Privacy} />
      </InfoContainer>
      <InfoContainer>
        <a id='imprint' />
        <Markdown source={Acknowledgements} />
      </InfoContainer>
      <InfoContainer>
        <a id='acknowledgements' />
        <Markdown source={Imprint} />
      </InfoContainer>
    </>
  );
};

export default Settings;
