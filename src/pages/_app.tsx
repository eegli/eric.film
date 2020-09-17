import Header from '@/components/header/header.component';
import { logSpotifyEaserEgg } from '@/src/utils/spotifyEasterEgg';
import Fonts from '@/styles/theme/fonts';
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
import { GlobalTheme } from '../styles/index';
import { darkTheme } from '../styles/theme/theme';

// As per the docs: "You should initialize the Sentry React SDK as soon as possible during your application load up, before initializing React"
Sentry.init({
  enabled: process.env.NODE_ENV === 'production',
  dsn: process.env.SENTRY_DSN,
});

interface Props extends AppProps {
  err: any;
}

const App: React.FC<Props> = ({ Component, pageProps, err }) => {
  const router = useRouter();

  // Easter egg spotify page in console
  useEffect(() => {
    logSpotifyEaserEgg();
  }, []);

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
  }, [router.events]);

  // Restore data from cache
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={darkTheme}>
          <GlobalTheme />
          <Header />
          <Component {...pageProps} err={err} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
