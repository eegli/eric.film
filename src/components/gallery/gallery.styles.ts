import styled from 'styled-components';
import { GalleryProps } from './gallery.component';

type Props = Pick<GalleryProps, 'layout'>;

// The gallery has two forms: Column (default) and grid (optional).
// Grid is used on the index page and prefers images of the same width and height. Column displays images in a vertical column.

export const GalleryContainer = styled.div<Props>`
  /* Prevent vertical gaps */
  margin-top: ${({ layout }) => (layout === 'grid' ? '2.5rem' : '1rem')};
  line-height: 0;
  column-count: ${({ layout }) => (layout === 'grid' ? '3' : '1')};
  column-gap: 0px;

  @media (max-width: 960px) {
    column-count: ${({ layout }) => (layout === 'grid' ? '2' : '1')};
  }
  @media (max-width: 700px) {
    column-count: 1;
  }
`;

export const Image = styled.img`
  width: 100% !important;
  max-width: 1024px;
  max-height: 100%;
  object-fit: cover;
`;
