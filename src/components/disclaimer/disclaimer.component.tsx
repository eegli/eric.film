import Markdown from '@/components/markdown/markdown.component';
import acknowledgements from 'src/content/acknowledgements.md';
import imprint from 'src/content/imprint.md';
import privacy from 'src/content/privacy.md';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  margin: 2rem 0;
`;

const Disclaimer: React.FC = () => {
  return (
    <>
      <InfoWrapper>
        <a id='privacy' />
        <Markdown transparentBg content={privacy} />
      </InfoWrapper>
      <InfoWrapper>
        <a id='acknowledgements' />
        <Markdown transparentBg content={acknowledgements} />
      </InfoWrapper>
      <InfoWrapper>
        <a id='imprint' />
        <Markdown transparentBg content={imprint} />
      </InfoWrapper>
    </>
  );
};

export default Disclaimer;
