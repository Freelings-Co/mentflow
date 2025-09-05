import React from 'react';
import { useParams } from 'react-router-dom';
import { EncounterDetail } from '../components/encounters/EncounterDetail';

export const EncounterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className="min-h-screen bg-[var(--cor-background)] p-6">
        <div className="max-w-7xl mx-auto">
          <div className="card text-center py-12">
            <h1 className="text-2xl font-bold text-[var(--cor-texto)] mb-4">
              Atendimento não encontrado
            </h1>
            <p className="text-[var(--cor-texto-claro)]">
              O ID do atendimento não foi fornecido.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--cor-background)] p-6">
      <div className="max-w-4xl mx-auto">
        <EncounterDetail encounterId={id} />
      </div>
    </div>
  );
};