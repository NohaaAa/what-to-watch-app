import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import AppWrapper from '@components/app-wrapper';
import {Provider, useSelector} from 'react-redux';
import RouteGuard from '@components/route-guard';
import {store, wrapper} from '@store/store';


function WhatToWatchApp({ Component, pageProps }: AppProps) {
    // const [userInfo, setUserInfo] = useState<{userInfo?: IUser, loading: boolean}>({loading: false})
    // store.subscribe(() => {
    //     if(!store.getState().userInfo.loading) {
    //         setUserInfo( store.getState().userInfo);
    //     }
    // })
  return (
      <Provider store={store}>
          <AppWrapper>
              <RouteGuard>
                  <Component {...pageProps}/>
              </RouteGuard>

          </AppWrapper>
      </Provider>
  )
}

export default wrapper.withRedux(WhatToWatchApp);
