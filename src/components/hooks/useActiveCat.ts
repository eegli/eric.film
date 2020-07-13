import Router from 'next/router';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useActiveUrl(defaultCat: string): string {
  const [activeUrl, setActiveUrl] = useState(defaultCat);

  useIsomorphicLayoutEffect(() => {
    const handleRouteChange = (url: string) => {
      setActiveUrl(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    // We need to cleanup after router events: https://nextjs.org/docs/api-reference/next/router
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return activeUrl;
}
