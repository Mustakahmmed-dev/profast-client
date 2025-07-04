import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './routes/Router'
import AuthProvider from './contexts/AuthProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <AuthProvider>
      <RouterProvider router={Router}> </RouterProvider>
      <ToastContainer/>
    </AuthProvider>
    </div>
  </StrictMode>,
)
