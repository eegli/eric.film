import React, { useEffect } from 'react';
import { Global } from '../styles/styles';
import Header from '@/components/header/header.component';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../lib/apolloClient';
import Fonts from '@/styles/fonts';

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

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <div>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Global />
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </div>
    </>
  );
};

export default App;
