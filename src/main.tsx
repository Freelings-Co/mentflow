import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './styles/colors.css'
// import './styles/fonts.css'
// import './index.css'
// import Landing from './pages/Landing'
// import MainLayout from './layouts/MainLayout'
// import ScrollToTop from './components/ScrollToTop'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter
//       future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
//     >
//       <ScrollToTop />
//       <MainLayout>
//         <Routes>

//           <Route path='/' element={<Landing />} />
          
         
//         </Routes>
//       </MainLayout>
//     </BrowserRouter>
//   </React.StrictMode>,
// )

