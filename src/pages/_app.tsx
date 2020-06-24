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
import language from 'react-syntax-highlighter/dist/esm/languages/hljs/1c';

const App = ({ Component, pageProps }: AppProps) => {
  // Pretty loading state on top
  useEffect(() => {
    Fonts();
    Router.events.on('routeChangeStart', u => NProgress.start());
    Router.events.on('routeChangeComplete', u => NProgress.done());
    Router.events.on('routeChangeError', (e, u) => NProgress.done());
    return () => {
      Router.events.off('routeChangeStart', () => {});
      Router.events.off('routeChangeComplete', () => {});
      Router.events.off('routeChangeError', () => {});
    };
  }, []);

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
          {/* TODO Remove noindex */}
          <meta name='robots' content='noindex'></meta>
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
