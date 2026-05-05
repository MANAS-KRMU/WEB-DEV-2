import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Context} from './Context/Context.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider value={{color:"red"}}>
    <App />
  </ContextProvider>,
)
