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

const App = ({ Component, pageProps }: AppProps) => {
  // Pretty loading state on top
  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    return () => {
      Router.events.off('routeChangeStart', () => {});
      Router.events.off('routeChangeComplete', () => {});
    };
  });

  const [canView, setCanView] = useState(true);

  // TODO Add browser check

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
          {/* TODO Check if preloading is possible */}
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
            rel='stylesheet'
          />
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
