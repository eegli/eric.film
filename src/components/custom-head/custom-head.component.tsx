import Head from 'next/head';

type MetaProps = {
  title: string;
  description: string;
  ogImage: { url: string };
};

const CustomHead: React.FC<MetaProps> = ({
  title,
  description,
  ogImage,
  children,
}) => {
  // Meta descriptions can be any length, but Google generally truncates
  // snippets to ~155–160 characters.

  const desc =
    description.length > 150
      ? description.substring(0, 150).concat('...')
      : description;
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={desc} key='description' />
      <meta property='og:title' content={title} key='og-title' />
      <meta property='og:image' content={ogImage.url} key='og-image' />
      <meta property='og:image:type' content='image/jpeg' key='og-image-type' />
      <meta property='og:description' content={desc} key='og-description' />
      <meta
        name='twitter:card'
        content='summary_large_image'
        key='summary-large'
      />
      <meta name='twitter:title' content={title} key='twitter-title' />
      <meta
        name='twitter:description'
        content={desc}
        key='twitter-description'
      />
      <meta name='twitter:image' content={ogImage.url} key='twitter-image' />
      {children}
    </Head>
  );
};

export default CustomHead;
