import React, { useState, useEffect } from 'react';
import { Global } from '../styles/styles';
import Header from '../components/header/header.component';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../lib/apolloClient';

import { browserTest } from '../utils/browser';

// Pretty loading state on top
Router.events.on('routeChangeStart', url => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  const [canView, setCanView] = useState(true);

  // TODO Add browser check
  // useEffect(() => {
  //   const result = browserTest();
  //   console.log(result);
  //   if (result !== undefined) {
  //     setCanView(result);
  //   }
  // }, []);

  if (canView) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
      <>
        <Head>
          <title>eric.film - home</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta name='robots' content='noindex'></meta>

          {/* https://github.com/vercel/next.js/issues/160, https://www.denisbouquet.com/google-fonts-render-blocking/ */}
          <link
            href='https://fonts.googleapis.com/css2?family=Lato&display=swap'
            rel='stylesheet'></link>
        </Head>
        <main>
          <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
              <Global />
              <Header />
              <Component {...pageProps} />
            </ThemeProvider>
          </ApolloProvider>
        </main>
      </>
    );
  } else {
    return <h1>Your browser is not supported</h1>;
  }
};

export default App;
