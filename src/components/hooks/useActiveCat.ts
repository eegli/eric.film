import { useRouter } from 'next/router';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/* Returns the query by extracting it from the url when the route changes */

// Example strings:
// query: 'clients'
// queryPath: '/portfolio?cat='
// url: '/portfolio?cat?clients'

export const useActiveCat = (query: string, queryPath = '') => {
  const router = useRouter();
  const [activeUrl, setActiveUrl] = useState<string>(query);

  useIsomorphicLayoutEffect(() => {
    const handleRouteChange = (path: string) => {
      const slicedUrl = path.slice(queryPath.length);
      setActiveUrl(slicedUrl);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // We need to cleanup after router events: https://nextjs.org/docs/api-reference/next/router
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return activeUrl;
};
