import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/mainPage'
import GenerationPage from './pages/generationPage'
import pageNotFound from './pages/pageNotFound'
import About from './pages/about'


const router = createBrowserRouter([
  { path:'/',
    element: <MainPage/>
  },
  { path:'/generation',
    element: <GenerationPage/>
   },
   { path:'/about',
  element: <About/>}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
