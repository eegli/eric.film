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
import * as Sentry from '@sentry/node';
import * as gtag from '../lib/gtag';

Sentry.init({
  enabled: process.env.NODE_ENV === 'production',
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
});

interface Props extends AppProps {
  err: any;
}

const App = ({ Component, pageProps, err }: Props) => {
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
            <Component {...pageProps} err={err} />
          </ThemeProvider>
        </ApolloProvider>
      </div>
    </>
  );
};

export default App;
