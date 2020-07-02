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
import Fonts from '@/styles/fonts';

import { browserTest } from '../utils/browser';
import * as gtag from '../lib/gtag';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Fonts();
    const handleRouteChangeStart = (url: string) => {
      NProgress.start();
    };
    const handleRouteChangeComplete = (url: string) => {
      gtag.pageview(url, document.title);
      NProgress.done();
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  const [canView, setCanView] = useState(true);

  // TODO Add browser check

  if (canView) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
      <>
        <Head>
          <html prefix='og: https://ogp.me/ns#' />
          <title>eric.film</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />

          {/* TODO Remove noindex */}
          <meta name='robots' content='noindex, nofollow' />
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
