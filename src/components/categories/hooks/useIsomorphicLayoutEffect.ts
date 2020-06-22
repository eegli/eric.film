import { useLayoutEffect, useEffect } from 'react';

// https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a

// Isomorphism as applied to web development means rendering pages on both the server and client side

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
