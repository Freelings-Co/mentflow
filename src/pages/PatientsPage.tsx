import React, { useState } from 'react';
import { PatientsList } from '../components/patients/PatientsList';
import { PatientDetail } from '../components/patients/PatientDetail';
import { PatientVM } from '../types/viewModels';

export const PatientsPage: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<PatientVM | null>(null);

  return (
    <div className="min-h-screen bg-[var(--cor-background)] p-6">
      <div className="max-w-7xl mx-auto">
        {selectedPatient ? (
          <div>
            <div className="mb-6">
              <button 
                onClick={() => setSelectedPatient(null)}
                className="btn-secondary"
              >
                ← Voltar para lista
              </button>
            </div>
            <PatientDetail patientId={selectedPatient.id} />
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[var(--cor-texto)]">
                Pacientes
              </h1>
              <p className="text-[var(--cor-texto-claro)] mt-2">
                Gerencie os pacientes cadastrados no sistema
              </p>
            </div>
            <PatientsList onPatientSelect={setSelectedPatient} />
          </div>
        )}
      </div>
    </div>
  );
};