'use client'
import React, { ReactNode } from 'react'
import { store,persiststor } from '@/Redux/store'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MainLoader from './MainLoader'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<MainLoader />} persistor={persiststor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default Layout