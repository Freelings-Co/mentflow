import React from 'react';
import { useEncounter } from '../../hooks/useEncounters';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorMessage } from '../ui/ErrorMessage';

interface EncounterDetailProps {
  encounterId: string;
}

export const EncounterDetail: React.FC<EncounterDetailProps> = ({ encounterId }) => {
  const { data: encounter, isLoading, error, refetch } = useEncounter(encounterId);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="card">
        <LoadingSpinner size="lg" className="py-12" />
      </div>
    );
  }

  if (error || !encounter) {
    return (
      <ErrorMessage 
        message="Erro ao carregar ficha de atendimento" 
        onRetry={() => refetch()} 
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="card">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-[var(--cor-texto)] mb-2">
              Ficha de Atendimento
            </h1>
            <div className="text-[var(--cor-texto-claro)]">
              <p><strong>Paciente:</strong> {encounter.patient.name}</p>
              <p><strong>Profissional:</strong> Dr(a). {encounter.professional.name}</p>
              <p><strong>Data:</strong> {formatDate(encounter.date)}</p>
            </div>
          </div>
          
          {encounter.billingLink && (
            <a 
              href={encounter.billingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Ver Cobrança
            </a>
          )}
        </div>
      </div>

      {/* Queixa Principal */}
      {encounter.chiefComplaint && (
        <div className="card">
          <h2 className="text-lg font-semibold text-[var(--cor-texto)] mb-3">
            Queixa Principal
          </h2>
          <p className="text-[var(--cor-texto-claro)] leading-relaxed">
            {encounter.chiefComplaint}
          </p>
        </div>
      )}

      {/* Anamnese */}
      {encounter.anamnesis && (
        <div className="card">
          <h2 className="text-lg font-semibold text-[var(--cor-texto)] mb-3">
            Anamnese
          </h2>
          <div className="text-[var(--cor-texto-claro)] leading-relaxed whitespace-pre-wrap">
            {encounter.anamnesis}
          </div>
        </div>
      )}

      {/* Diagnóstico */}
      {encounter.diagnosis && (
        <div className="card">
          <h2 className="text-lg font-semibold text-[var(--cor-texto)] mb-3">
            Diagnóstico
          </h2>
          <p className="text-[var(--cor-texto-claro)] leading-relaxed">
            {encounter.diagnosis}
          </p>
        </div>
      )}

      {/* Procedimentos */}
      {encounter.procedures && encounter.procedures.length > 0 && (
        <div className="card">
          <h2 className="text-lg font-semibold text-[var(--cor-texto)] mb-3">
            Procedimentos
          </h2>
          <div className="space-y-2">
            {encounter.procedures.map((procedure, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-[var(--cor-primaria-light)] rounded-[var(--border-radius)]">
                <div className="w-2 h-2 bg-[var(--cor-primaria)] rounded-full"></div>
                <div>
                  <span className="font-medium text-[var(--cor-texto)]">
                    {procedure.name}
                  </span>
                  {procedure.code && (
                    <span className="text-sm text-[var(--cor-texto-claro)] ml-2">
                      ({procedure.code})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prescrições */}
      {encounter.prescriptions && encounter.prescriptions.length > 0 && (
        <div className="card">
          <h2 className="text-lg font-semibold text-[var(--cor-texto)] mb-3">
            Prescrições
          </h2>
          <div className="space-y-4">
            {encounter.prescriptions.map((prescription, index) => (
              <div key={index} className="border border-gray-100 rounded-[var(--border-radius)] p-4">
                <h4 className="font-medium text-[var(--cor-texto)] mb-2">
                  {prescription.drug}
                </h4>
                {prescription.dosage && (
                  <p className="text-sm text-[var(--cor-texto-claro)] mb-1">
                    <strong>Dosagem:</strong> {prescription.dosage}
                  </p>
                )}
                {prescription.instructions && (
                  <p className="text-sm text-[var(--cor-texto-claro)]">
                    <strong>Instruções:</strong> {prescription.instructions}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Anexos */}
      {encounter.attachments && encounter.attachments.length > 0 && (
        <div className="card">
          <h2 className="text-lg font-semibold text-[var(--cor-texto)] mb-3">
            Anexos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {encounter.attachments.map((attachment) => (
              <a
                key={attachment.id}
                href={attachment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 border border-gray-100 rounded-[var(--border-radius)] hover:bg-[var(--cor-primaria-light)] transition-colors"
              >
                <div className="w-10 h-10 bg-[var(--cor-primaria)] rounded-[var(--border-radius)] flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[var(--cor-texto)] truncate">
                    {attachment.name}
                  </p>
                  {attachment.type && (
                    <p className="text-sm text-[var(--cor-texto-claro)]">
                      {attachment.type}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};