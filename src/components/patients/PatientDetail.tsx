import React from 'react';
import { usePatient } from '../../hooks/usePatient';
import { useEncounters } from '../../hooks/useEncounters';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorMessage } from '../ui/ErrorMessage';

interface PatientDetailProps {
  patientId: string;
}

export const PatientDetail: React.FC<PatientDetailProps> = ({ patientId }) => {
  const { data: patient, isLoading: patientLoading, error: patientError, refetch: refetchPatient } = usePatient(patientId);
  const { data: encounters, isLoading: encountersLoading, error: encountersError } = useEncounters(patientId);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getGenderLabel = (gender?: string) => {
    switch (gender) {
      case 'male': return 'Masculino';
      case 'female': return 'Feminino';
      case 'other': return 'Outro';
      default: return 'Não informado';
    }
  };

  if (patientLoading) {
    return (
      <div className="card">
        <LoadingSpinner size="lg" className="py-12" />
      </div>
    );
  }

  if (patientError || !patient) {
    return (
      <ErrorMessage 
        message="Erro ao carregar dados do paciente" 
        onRetry={() => refetchPatient()} 
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Informações do Paciente */}
      <div className="card">
        <div className="flex items-start space-x-6">
          {patient.photoUrl ? (
            <img 
              src={patient.photoUrl} 
              alt={patient.name}
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-[var(--cor-primaria)] flex items-center justify-center text-white text-2xl font-bold">
              {patient.name.charAt(0).toUpperCase()}
            </div>
          )}
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[var(--cor-texto)] mb-2">{patient.name}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[var(--cor-texto)] mb-2">Informações Pessoais</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="text-[var(--cor-texto-claro)]">Documento:</span> {patient.document || '-'}</div>
                  <div><span className="text-[var(--cor-texto-claro)]">Data de nascimento:</span> {formatDate(patient.birthDate)}</div>
                  <div><span className="text-[var(--cor-texto-claro)]">Idade:</span> {patient.age ? `${patient.age} anos` : '-'}</div>
                  <div><span className="text-[var(--cor-texto-claro)]">Gênero:</span> {getGenderLabel(patient.gender)}</div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-[var(--cor-texto)] mb-2">Contato</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="text-[var(--cor-texto-claro)]">Telefone:</span> {patient.contacts.phone || '-'}</div>
                  <div><span className="text-[var(--cor-texto-claro)]">Email:</span> {patient.contacts.email || '-'}</div>
                  {patient.address && (
                    <>
                      <div><span className="text-[var(--cor-texto-claro)]">Cidade:</span> {patient.address.city || '-'}</div>
                      <div><span className="text-[var(--cor-texto-claro)]">Estado:</span> {patient.address.state || '-'}</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Histórico de Consultas */}
      <div className="card">
        <h2 className="text-xl font-bold text-[var(--cor-texto)] mb-4">Histórico de Consultas</h2>
        
        {encountersLoading ? (
          <LoadingSpinner className="py-8" />
        ) : encountersError ? (
          <div className="text-center py-8 text-[var(--cor-texto-claro)]">
            Erro ao carregar histórico de consultas
          </div>
        ) : !encounters?.length ? (
          <div className="text-center py-8 text-[var(--cor-texto-claro)]">
            Nenhuma consulta encontrada
          </div>
        ) : (
          <div className="space-y-4">
            {encounters.map((encounter) => (
              <div key={encounter.id} className="border border-gray-100 rounded-[var(--border-radius)] p-4 hover:bg-[var(--cor-primaria-light)] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-[var(--cor-texto)]">
                      {formatDate(encounter.date)}
                    </h4>
                    <p className="text-sm text-[var(--cor-texto-claro)]">
                      Dr(a). {encounter.professional.name}
                      {encounter.professional.specialty && ` - ${encounter.professional.specialty}`}
                    </p>
                  </div>
                </div>
                
                {encounter.chiefComplaint && (
                  <div className="mb-2">
                    <span className="text-sm font-medium text-[var(--cor-texto)]">Queixa principal:</span>
                    <p className="text-sm text-[var(--cor-texto-claro)]">{encounter.chiefComplaint}</p>
                  </div>
                )}
                
                {encounter.diagnosis && (
                  <div className="mb-2">
                    <span className="text-sm font-medium text-[var(--cor-texto)]">Diagnóstico:</span>
                    <p className="text-sm text-[var(--cor-texto-claro)]">{encounter.diagnosis}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};