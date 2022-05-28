import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import AppWrapper from '@components/app-wrapper';
import {Provider, useSelector} from 'react-redux';
import {store, wrapper} from '../src/store/store';
import RouteGuard from '@components/route-guard';
import {IInitialState} from '@interfaces/common.interface';
import {useState} from 'react';
import {IUser} from '@interfaces/user.interface';

function WhatToWatchApp({ Component, pageProps }: AppProps) {
    const [userInfo, setUserInfo] = useState<{userInfo?: IUser, loading: boolean}>({loading: false})
    store.subscribe(() => {
        if(!store.getState().userInfo.loading) {
            setUserInfo( store.getState().userInfo);
        }
    })
  return (
      <Provider store={store}>
          <AppWrapper>
              <RouteGuard userInfo={userInfo}>
                  <Component {...pageProps}/>
              </RouteGuard>

          </AppWrapper>
      </Provider>
  )
}

export default wrapper.withRedux(WhatToWatchApp);
