import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { persistor ,store} from './app/store'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Auth0Provider
    domain="dev-mjaxbbxegq31vie4.us.auth0.com"
    clientId="u3bumYKeg3GQCdFpGlWvSXSqe0gqPVha"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
        <App />

  </Auth0Provider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);