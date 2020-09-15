import { Blogpost, BlogpostsPreview, ImageCollections } from './queries';

describe('Query BlogpostsPreview', () => {
  it('matches snapshot', () => {
    expect(BlogpostsPreview).toMatchSnapshot();
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
