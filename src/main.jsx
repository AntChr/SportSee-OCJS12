import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./style/index.scss"
import mockedApi from './utils/mockedapi.js'

if (import.meta.env.MODE === 'development') {
  mockedApi()
}

// eslint-disable-next-line no-undef
console.log('URL_API:', URL_API)

console.log('import.meta.env.MODE:', import.meta.env.MODE)


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
