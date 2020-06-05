import React from 'react';
import { Global } from '../style/globalStyles';
import Header from '../components/header/header.component';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <Global />
        <Header />
        <Component {...pageProps} />
      </main>
    </React.Fragment>
  );
};

export default App;
