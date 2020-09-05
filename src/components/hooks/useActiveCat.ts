import { getElementFromArray } from '@/src/utils/getElementFromArray';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/* Returns the query by extracting it from the url when the route changes */

// Example strings:
// query: 'clients'
// queryPath: '/portfolio?cat='
// url: '/portfolio?cat=clients'

export const useActiveCat = (query: string, queryPath = '') => {
  const router = useRouter();
  const [activeUrl, setActiveUrl] = useState<string>(query);

  /* What does the first useEffect do? */

  // When the component first mounts, it gets the active category from the url.
  // This is useful when someone enters the url directly into the browser.

  // This effect is only run once on mount.
  // Future category updates will be handled by the second effect.

  useEffect(() => {
    const path = router.query.cat ? router.query.cat : '';
    setActiveUrl(getElementFromArray(path));
  }, []);

  /* The second effect handles incoming updates */

  // When the user switches categories, the parent (/blog or /portfolio) will
  // not re-render Instead, the active category is updated via router events as
  // follows.

  useIsomorphicLayoutEffect(() => {
    const handleRouteChange = (path: string) => {
      const slicedUrl = path.slice(queryPath.length);
      setActiveUrl(slicedUrl);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // We need to cleanup after router events:
    // https://nextjs.org/docs/api-reference/next/router
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return activeUrl;
};
