import * as React from 'react'
import { createRoot } from "react-dom/client";
import {app} from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={app} />
  </React.StrictMode>
)
