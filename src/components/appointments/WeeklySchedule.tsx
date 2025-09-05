import React, { useState } from 'react';
import { useAppointments } from '../../hooks/useAppointments';
import { AppointmentVM } from '../../types/viewModels';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorMessage } from '../ui/ErrorMessage';
import { EmptyState } from '../ui/EmptyState';

export const WeeklySchedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedProfessional, setSelectedProfessional] = useState<string>('');

  // Calcular início e fim da semana
  const getWeekRange = (date: Date) => {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { start, end };
  };

  const { start: weekStart, end: weekEnd } = getWeekRange(selectedDate);
  
  const { data: appointments, isLoading, error, refetch } = useAppointments(
    weekStart.toISOString().split('T')[0],
    weekEnd.toISOString().split('T')[0],
    selectedProfessional || undefined
  );

  const getStatusColor = (status: AppointmentVM['status']) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'canceled': return 'bg-red-100 text-red-800';
      case 'finished': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: AppointmentVM['status']) => {
    switch (status) {
      case 'scheduled': return 'Agendado';
      case 'confirmed': return 'Confirmado';
      case 'canceled': return 'Cancelado';
      case 'finished': return 'Finalizado';
      default: return status;
    }
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit'
    });
  };

  // Agrupar agendamentos por dia
  const groupAppointmentsByDay = (appointments: AppointmentVM[]) => {
    const grouped: { [key: string]: AppointmentVM[] } = {};
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      const dateKey = date.toISOString().split('T')[0];
      grouped[dateKey] = [];
    }

    appointments?.forEach(appointment => {
      const dateKey = appointment.start.split('T')[0];
      if (grouped[dateKey]) {
        grouped[dateKey].push(appointment);
      }
    });

    // Ordenar por horário
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
    });

    return grouped;
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + (direction === 'next' ? 7 : -7));
    setSelectedDate(newDate);
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
        message="Erro ao carregar agenda" 
        onRetry={() => refetch()} 
      />
    );
  }

  const groupedAppointments = groupAppointmentsByDay(appointments || []);

  return (
    <div className="space-y-6">
      {/* Filtros e Navegação */}
      <div className="card">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigateWeek('prev')}
              className="btn-secondary"
            >
              ← Semana anterior
            </button>
            <h2 className="text-xl font-bold text-[var(--cor-texto)]">
              {weekStart.toLocaleDateString('pt-BR')} - {weekEnd.toLocaleDateString('pt-BR')}
            </h2>
            <button 
              onClick={() => navigateWeek('next')}
              className="btn-secondary"
            >
              Próxima semana →
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={selectedProfessional}
              onChange={(e) => setSelectedProfessional(e.target.value)}
              className="input-field w-auto"
            >
              <option value="">Todos os profissionais</option>
              {/* Aqui você pode adicionar opções dinâmicas baseadas nos profissionais */}
            </select>
          </div>
        </div>
      </div>

      {/* Grade da Semana */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {Object.entries(groupedAppointments).map(([dateKey, dayAppointments]) => {
          const date = new Date(dateKey + 'T00:00:00');
          
          return (
            <div key={dateKey} className="card min-h-[400px]">
              <h3 className="font-semibold text-[var(--cor-texto)] mb-4 text-center capitalize">
                {formatDate(date)}
              </h3>
              
              <div className="space-y-2">
                {dayAppointments.length === 0 ? (
                  <div className="text-center py-8 text-[var(--cor-texto-muito-claro)]">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Sem agendamentos
                  </div>
                ) : (
                  dayAppointments.map(appointment => (
                    <div 
                      key={appointment.id}
                      className="p-3 rounded-[var(--border-radius)] border border-gray-100 hover:shadow-[var(--sombra-suave)] transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-[var(--cor-texto)]">
                          {formatTime(appointment.start)} - {formatTime(appointment.end)}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {getStatusLabel(appointment.status)}
                        </span>
                      </div>
                      
                      <div className="text-sm">
                        <p className="font-medium text-[var(--cor-texto)] mb-1">
                          {appointment.patient.name}
                        </p>
                        <p className="text-[var(--cor-texto-claro)]">
                          Dr(a). {appointment.professional.name}
                        </p>
                        {appointment.serviceName && (
                          <p className="text-[var(--cor-texto-muito-claro)] text-xs mt-1">
                            {appointment.serviceName}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};