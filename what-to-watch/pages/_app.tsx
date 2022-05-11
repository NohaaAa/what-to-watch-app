import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import AppWrapper from '@components/app-wrapper';
import {Provider} from 'react-redux';
import {store, wrapper} from '@app-redux/store';

function WhatToWatchApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <AppWrapper>
              <Component {...pageProps} />
          </AppWrapper>
      </Provider>
  )
}

export default wrapper.withRedux(WhatToWatchApp);
