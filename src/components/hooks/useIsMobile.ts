'use client'
import React, { createContext } from 'react';

import useWindowSize from './useWindowSize';

export const IsSsrMobileContext = createContext(false);

export default function useIsMobile() {
  const isSsrMobile = React.useContext(IsSsrMobileContext);
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 768;

  return isSsrMobile || isBrowserMobile;
}