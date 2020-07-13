import Markdown from '@/components/blog/markdown/blog-markdown.component';
import { InfoContainer } from './settings.styles';
import Acknowledgements from './__content__/acknowledgements.md';
import Imprint from './__content__/imprint.md';
import Privacy from './__content__/privacy.md';

const Settings: React.FC = () => {
  return (
    <>
      <InfoContainer>
        <a id='privacy' />
        <Markdown source={Privacy} />
      </InfoContainer>
      <InfoContainer>
        <a id='acknowledgements' />
        <Markdown source={Acknowledgements} />
      </InfoContainer>
      <InfoContainer>
        <a id='imprint' />
        <Markdown source={Imprint} />
      </InfoContainer>
    </>
  );
};

export default Settings;
