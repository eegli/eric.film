import Head from 'next/head';

type MetaProps = {
  title: string;
  description: string;
  ogImage: { url: string };
};

const CustomHead = ({ title, description, ogImage }: MetaProps) => {
  // Meta descriptions can be any length, but Google generally truncates
  // snippets to ~155–160 characters.
  const trimmedDescription =
    description.length > 150
      ? description.substring(0, 150).concat('...')
      : description;
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={trimmedDescription} />
      <meta property='og:title' content={title} />
      <meta property='og:image' content={ogImage.url} />
      <meta property='og:description' content={trimmedDescription} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={trimmedDescription} />
      <meta name='twitter:image' content={ogImage.url} />
    </Head>
  );
};

export default CustomHead;
