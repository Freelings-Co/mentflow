import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/colors.css'
import './styles/fonts.css'
import './index.css'
import Landing from './pages/Landing'
import Hero from './components/HeroSection/hero'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path='/hero' element={<Hero />} />
          <Route path='/' element={<Landing />} />
          {/* Futuras rotas para login, dashboards, etc. */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
