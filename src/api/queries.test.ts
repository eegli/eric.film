import { BlogpostOrderByInput } from '@/src/components/types';
import {
  Blogpost,
  BlogpostsPreview,
  blogpostsPreviewVars,
  ImageCollections,
} from './queries';

describe('Query BlogpostsPreview', () => {
  it('matches snapshot', () => {
    expect(BlogpostsPreview).toMatchSnapshot();
  });

  it('returns correct preview query variables', () => {
    expect(blogpostsPreviewVars(BlogpostOrderByInput.CreatedAtAsc)).toEqual({
      orderBy: 'createdAt_ASC',
      skip: 0,
      first: 18,
    });
  });
});

describe('Query Blogpost', () => {
  it('matches snapshot', () => {
    expect(Blogpost).toMatchSnapshot();
  });
});

describe('Query ImageCollections', () => {
  it('matches snapshot', () => {
    expect(ImageCollections).toMatchSnapshot();
  });
});
