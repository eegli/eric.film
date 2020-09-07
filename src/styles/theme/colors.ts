/* Base gray palette */
// https://coolors.co/121212-222222-3b3b3b-b1b1b1-f1f1f1-f7f7f7

/* Base accent palette */
// https://coolors.co/034363-53272d-3659527

import { StyleObject } from '../index';

// Here is the place to define hex colors!

export const COLOR_PALETTE: StyleObject<string> = {
  // Base gray palette
  darkPrimary: '#121212',
  darkSecondary: '#222222',
  darkTertiary: '#3b3b3b',

  brightPrimary: '#f7f7f7',
  brightSecondary: '#cccccc',
  brightTertiary: '#8F8F8F',

  // Base accent palette
  accentBlue: '#034363',
  accentRed: '#53272D',
  accentGreen: '#365952',

  // Branding pink
  pinktBright: '#feb8ce',
  pinktDark: '#ff80a8',
};

/* Legacy */
// _blackPrimary: '#262626',
// _blackSecondary: '#313131',
// _whitePrimary: '#f7f7f7',
// _whiteSecondary: '#e1e1e1',
