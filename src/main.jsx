import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./style/index.scss"
import createMockedApi from './utils/mockedapi.js'

if(import.meta.env.REACT_APP_ENVIRONMENT === 'mockedApi') {
  createMockedApi()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
