import { useRouter } from 'next/router';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useActiveUrl = (defaultCat: string): string => {
  const router = useRouter();
  const [activeUrl, setActiveUrl] = useState<string>(defaultCat);

  useIsomorphicLayoutEffect(() => {
    const handleRouteChange = (url: string) => {
      setActiveUrl(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // We need to cleanup after router events: https://nextjs.org/docs/api-reference/next/router
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return activeUrl;
};
