import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RouteMap } from './routeList'
import Global from './assets/Styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteMap />
      <Global/>
    </BrowserRouter>
  </React.StrictMode>
)
