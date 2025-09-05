import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { queryClient } from './lib/queryClient';
import { PatientsPage } from './pages/PatientsPage';
import { SchedulePage } from './pages/SchedulePage';
import { EncounterPage } from './pages/EncounterPage';
import './styles/globals.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-[var(--cor-background)]">
          <nav className="bg-white shadow-[var(--sombra-suave)] border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-8">
                  <h1 className="text-xl font-bold text-[var(--cor-texto)]">
                    MentFlow
                  </h1>
                  <div className="flex space-x-6">
                    <a 
                      href="/agenda" 
                      className="text-[var(--cor-texto)] hover:text-[var(--cor-primaria)] transition-colors"
                    >
                      Agenda
                    </a>
                    <a 
                      href="/pacientes" 
                      className="text-[var(--cor-texto)] hover:text-[var(--cor-primaria)] transition-colors"
                    >
                      Pacientes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Navigate to="/agenda" replace />} />
            <Route path="/agenda" element={<SchedulePage />} />
            <Route path="/pacientes" element={<PatientsPage />} />
            <Route path="/atendimento/:id" element={<EncounterPage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;