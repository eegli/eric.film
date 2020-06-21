import styled from 'styled-components';

type GalleryProps = {
  index: boolean;
};

export const GalleryContainer = styled.div<GalleryProps>`
  /* Prevent vertical gaps */
  margin-top: 1rem;
  line-height: 0;

  -webkit-column-count: ${({ index }) => (index ? '3' : '1')};
  -webkit-column-gap: 0px;
  -moz-column-count: ${({ index }) => (index ? '3' : '1')};
  -moz-column-gap: 0px;
  column-count: ${({ index }) => (index ? '3' : '1')};
  column-gap: 0px;

  @media (max-width: 1200px) {
    -moz-column-count: ${({ index }) => (index ? '2' : '1')};
    -webkit-column-count: ${({ index }) => (index ? '2' : '1')};
    column-count: ${({ index }) => (index ? '2' : '1')};
  }
  @media (max-width: 700px) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
`;

export const Image = styled.img`
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
`;
