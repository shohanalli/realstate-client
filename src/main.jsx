import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Component/Header.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Authorization/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>  
    </AuthProvider>

<ToastContainer></ToastContainer>
  </StrictMode>,
)
