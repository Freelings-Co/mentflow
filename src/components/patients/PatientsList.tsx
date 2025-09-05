import React, { useState } from 'react';
import { usePatients } from '../../hooks/usePatients';
import { PatientVM } from '../../types/viewModels';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorMessage } from '../ui/ErrorMessage';
import { EmptyState } from '../ui/EmptyState';

interface PatientsListProps {
  onPatientSelect?: (patient: PatientVM) => void;
}

export const PatientsList: React.FC<PatientsListProps> = ({ onPatientSelect }) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = usePatients(search, page);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const formatContact = (contacts: PatientVM['contacts']) => {
    return contacts.phone || contacts.email || '-';
  };

  if (isLoading) {
    return (
      <div className="card">
        <LoadingSpinner size="lg" className="py-12" />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage 
        message="Erro ao carregar lista de pacientes" 
        onRetry={() => refetch()} 
      />
    );
  }

  if (!data?.patients.length) {
    return (
      <EmptyState
        title="Nenhum paciente encontrado"
        description={search ? "Tente ajustar os filtros de busca" : "Ainda não há pacientes cadastrados"}
        icon={
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar por nome ou documento..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-4 px-4 font-semibold text-[var(--cor-texto)]">Nome</th>
                <th className="text-left py-4 px-4 font-semibold text-[var(--cor-texto)]">Documento</th>
                <th className="text-left py-4 px-4 font-semibold text-[var(--cor-texto)]">Idade</th>
                <th className="text-left py-4 px-4 font-semibold text-[var(--cor-texto)]">Contato</th>
                <th className="text-left py-4 px-4 font-semibold text-[var(--cor-texto)]">Última consulta</th>
                <th className="text-left py-4 px-4 font-semibold text-[var(--cor-texto)]">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.patients.map((patient) => (
                <tr 
                  key={patient.id} 
                  className="border-b border-gray-50 hover:bg-[var(--cor-primaria-light)] transition-colors cursor-pointer"
                  onClick={() => onPatientSelect?.(patient)}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      {patient.photoUrl ? (
                        <img 
                          src={patient.photoUrl} 
                          alt={patient.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[var(--cor-primaria)] flex items-center justify-center text-white font-semibold">
                          {patient.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="font-medium">{patient.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[var(--cor-texto-claro)]">
                    {patient.document || '-'}
                  </td>
                  <td className="py-4 px-4 text-[var(--cor-texto-claro)]">
                    {patient.age ? `${patient.age} anos` : '-'}
                  </td>
                  <td className="py-4 px-4 text-[var(--cor-texto-claro)]">
                    {formatContact(patient.contacts)}
                  </td>
                  <td className="py-4 px-4 text-[var(--cor-texto-claro)]">
                    {formatDate(patient.lastAppointmentDate)}
                  </td>
                  <td className="py-4 px-4">
                    <button className="btn-secondary text-sm">
                      Ver detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        {data.total > 20 && (
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
            <span className="text-sm text-[var(--cor-texto-claro)]">
              Mostrando {((page - 1) * 20) + 1} a {Math.min(page * 20, data.total)} de {data.total} pacientes
            </span>
            <div className="flex space-x-2">
              <button 
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="btn-secondary text-sm disabled:opacity-50"
              >
                Anterior
              </button>
              <button 
                onClick={() => setPage(p => p + 1)}
                disabled={page * 20 >= data.total}
                className="btn-secondary text-sm disabled:opacity-50"
              >
                Próxima
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};