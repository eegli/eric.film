import React, { useEffect, useState } from 'react';
import { Global } from '../styles/styles';
import Header from '../components/header/header.component';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

import { browserTest } from '../utils/browser';

import { useApollo } from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/react-hooks';

// Pretty loading state on top
Router.events.on('routeChangeStart', url => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
          <title>My page title</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta name='robots' content='noindex'></meta>

          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
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
