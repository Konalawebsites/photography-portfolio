import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { customTheme } from '../styles/theme.jsx'
import { Grommet } from 'grommet'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Grommet theme={customTheme} full>
      <App />
    </Grommet>
  </React.StrictMode>,
)
