import Markdown from '@/components/markdown/markdown.component';
import styled from 'styled-components';
import acknowledgements from './content/acknowledgements.md';
import imprint from './content/imprint.md';
import privacy from './content/privacy.md';

const InfoWrapper = styled.div`
  margin: 2rem 0;
`;

const Disclaimer: React.FC = () => {
  return (
    <>
      <InfoWrapper>
        <a id='privacy' />
        <Markdown content={privacy} />
      </InfoWrapper>
      <InfoWrapper>
        <a id='acknowledgements' />
        <Markdown content={acknowledgements} />
      </InfoWrapper>
      <InfoWrapper>
        <a id='imprint' />
        <Markdown content={imprint} />
      </InfoWrapper>
    </>
  );
};

export default Disclaimer;
