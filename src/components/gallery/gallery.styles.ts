import styled from 'styled-components';

type GalleryProps = {
  index: boolean;
};

export const GalleryContainer = styled.div<GalleryProps>`
  /* Prevent vertical gaps */
  margin-top: ${({ index }) => (index ? '2.5rem' : '1rem')};
  line-height: 0;
  column-count: ${({ index }) => (index ? '3' : '1')};
  column-gap: 0px;

  @media (max-width: 1200px) {
    column-count: ${({ index }) => (index ? '2' : '1')};
  }
  @media (max-width: 700px) {
    column-count: 1;
  }
`;

export const Image = styled.img`
  /* Just in case there are inline attributes */
  width: 100% !important;
  max-height: 100%;
  object-fit: cover;
`;
