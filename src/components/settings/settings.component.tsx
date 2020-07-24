import Markdown from '@/components/blog/markdown/markdown.component';
import acknowledgements from './content/acknowledgements.md';
import imprint from './content/imprint.md';
import privacy from './content/privacy.md';
import { InfoContainer } from './settings.styles';

const Settings: React.FC = () => {
  return (
    <>
      <InfoContainer>
        <a id='privacy' />
        <Markdown content={privacy} />
      </InfoContainer>
      <InfoContainer>
        <a id='acknowledgements' />
        <Markdown content={acknowledgements} />
      </InfoContainer>
      <InfoContainer>
        <a id='imprint' />
        <Markdown content={imprint} />
      </InfoContainer>
    </>
  );
};

export default Settings;
