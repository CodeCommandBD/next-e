import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './shopcartSlice'
import { persistStore, persistReducer, WebStorage } from 'redux-persist'

import createWebStorage from 'redux-persist/es/storage/createWebStorage'




export function createPersistStore():WebStorage{
  const isServer =typeof window === 'undefined'
  if(isServer){
    return{
      getItem(){
        return Promise.resolve(null);
      },
      setItem(){
        return Promise.resolve()
      },
      removeItem(){
        return Promise.resolve()
      }
    }
  }
  return createWebStorage('local')
}

const storage = typeof window !== 
'undefined'
? 
createWebStorage('local') 
: 
createPersistStore() 


const persistConfig = {
  key: 'root',
  version:1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, shopReducer)

export const store = configureStore({
  reducer: {
    shopcart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }),
});

export const persiststor = persistStore(store)