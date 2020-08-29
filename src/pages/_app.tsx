import Header from '@/components/header/header.component';
import Fonts from '@/styles/fonts';
import { ApolloProvider } from '@apollo/client';
import * as Sentry from '@sentry/node';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useApollo } from '../lib/apolloClient';
import * as gtag from '../lib/gtag';
import { Global } from '../styles/styles';
import { darkTheme } from '../styles/theme';

Sentry.init({
  enabled: process.env.NODE_ENV === 'production',
  dsn: process.env.SENTRY_DSN,
});

interface Props extends AppProps {
  err: any;
}

const App: React.FC<Props> = ({ Component, pageProps, err }) => {
  const router = useRouter();

  // useEffect(() => {
  //   console.log('Hi');
  // }, []);

  // Effect to load font
  useEffect(() => {
    Fonts();
  }, []);

  // Handle route change and GA events, they are tied together
  useEffect(() => {
    const handleRouteChangeStart = () => {
      NProgress.start();
    };
    const handleRouteChangeComplete = (url: string) => {
      gtag.pageview(url, document.title);
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* TODO Remove */}
        <meta name='robots' content='noindex, nofollow' />
      </Head>

      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={darkTheme}>
          <Global />
          <Header />
          <Component {...pageProps} err={err} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
