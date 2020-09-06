const base = 'https://beta.eric.film/static/img';

// Type inference is pretty strong here
export const SEO_INDEX_META = {
  title: 'Eric Egli - Freelance Photographer & Filmer',
  description:
    'Freelance photography & filmmaking. Based in Zurich, Switzerland. Blogging about web development, video editing and more.',
  image: {
    url: `${base}/og/og_home.jpg`,
  },
};
export const SEO_ABOUT_META = {
  title: 'Eric Egli - About | Photograper & Filmmaker',
  description:
    "I'm a freelance photographer & filmer with a passion for web development. Say Hello to the team behind eric.film.",
  image: {
    url: `${base}/og/og_about.jpg`,
  },
};
export const SEO_PORTFOLIO_META = {
  title: 'Eric Egli - Portfolio | Photograper & Filmmaker',
  description:
    'Moving and still portfolio - A selection of my work in the past years. Shots from all over the world.',
  image: {
    url: `${base}/og/og_portfolio.jpg`,
  },
};

export const SEO_BLOG_INDEX_META = {
  title: 'Eric Egli - Blog | Latest Blog Posts',
  description:
    'Check out the latest video of the week or get insights into web development with React.js, Next.js and more!',
  image: {
    url: `${base}/og/og_blog.jpg`,
  },
};

export const SCHEMA_PUBLISHER_LOGO = {
  url: `${base}/var/schema_logo.png`,
};

export const FALLBACK_IMG = {
  url: `${base}/placeholder.jpg`,
};
