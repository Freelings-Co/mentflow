import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import Especialistas from './pages/Especialistas';
import ParaEmpresas from './pages/ParaEmpresas';
import TestRoute from './pages/TestRoute';

// Componente para rolagem suave ao topo ao mudar de rota
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Navegando para:', pathname);
  }, [pathname]);

  return null;
};

// Export the main routing component
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout><Landing /></MainLayout>} />
        <Route path="/especialistas" element={<MainLayout><Especialistas /></MainLayout>} />
        <Route path="/empresas" element={<MainLayout><ParaEmpresas /></MainLayout>} />
        <Route path="/test-route" element={<MainLayout><TestRoute /></MainLayout>} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  );
}
