import {
  Blogpost,
  BlogpostsPreview,
  imageCollectionHome,
  ImageCollectionPortfolio,
} from './queries';

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

describe('Query imageCollectionHome', () => {
  it('matches snapshot', () => {
    expect(imageCollectionHome).toMatchSnapshot();
  });
});

describe('Query ImageCollectionPortfolio', () => {
  it('matches snapshot', () => {
    expect(ImageCollectionPortfolio).toMatchSnapshot();
  });
});
