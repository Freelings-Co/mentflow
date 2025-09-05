import React from 'react';
import { WeeklySchedule } from '../components/appointments/WeeklySchedule';

export const SchedulePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--cor-background)] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[var(--cor-texto)]">
            Agenda
          </h1>
          <p className="text-[var(--cor-texto-claro)] mt-2">
            Visualize e gerencie os agendamentos da semana
          </p>
        </div>
        <WeeklySchedule />
      </div>
    </div>
  );
};