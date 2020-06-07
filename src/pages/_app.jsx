import React from 'react';
import { Global } from '../theme/styles';
import Header from '../components/header/header.component';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='robots' content='noindex'></meta>

        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          <Global />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
};

export default App;
