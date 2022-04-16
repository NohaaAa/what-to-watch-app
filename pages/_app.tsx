import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import AppWrapper from '@components/app-wrapper';

function WhatToWatchApp({ Component, pageProps }: AppProps) {
  return (
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
  )
}

export default WhatToWatchApp;
