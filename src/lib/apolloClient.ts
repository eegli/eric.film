import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri:
        'https://api-eu-central-1.graphcms.com/v2/ckawpprfa01ja01z62wiy22qi/master',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};
export const initializeApollo = (initialState: any = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If a page has data fetching methods that use Apollo Client, the
  // initial state gets hydrated here
  if (initialState) {
    // Restore the cache using the data passed from
    // getStaticProps / getServerSideProps combined with the existing cached data
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (initialState: any) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
