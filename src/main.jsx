import React from 'react'
import ReactDOM from 'react-dom/client'
import route from './router/router'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import "./App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <div  class='mainconatiner'>
    <RouterProvider router={route}></RouterProvider>
  </div>


)
