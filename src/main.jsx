import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './sass/main.scss'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
