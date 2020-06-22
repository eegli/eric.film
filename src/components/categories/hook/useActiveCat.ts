import { useState, useEffect } from 'react';
import Router from 'next/router';

export function useActiveUrl(defaultCat: string): string {
  const [activeUrl, setActiveUrl] = useState(defaultCat);
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setActiveUrl(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    // We need to cleanup after router events: https://nextjs.org/docs/api-reference/next/router
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [Router]);
  return activeUrl;
}
