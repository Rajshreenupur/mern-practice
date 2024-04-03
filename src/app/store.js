import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todo/todoSlice'
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const persistConfig={
    key:'persist-store',
    storage,
    whitelist: ['counter'], // only persist the counter slice
    

}

const rootReducer = combineReducers({
    // your reducers
        counter: counterReducer,
        todo : todoReducer,
      
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({ reducer :persistedReducer });
  export const persistor = persistStore(store)


