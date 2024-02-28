// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.tsx'
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <App />
      <Toaster/>
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
