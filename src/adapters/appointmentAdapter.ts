import { ApiAppointment } from '../types/api';
import { AppointmentVM } from '../types/viewModels';

export const adaptAppointment = (apiAppointment: ApiAppointment): AppointmentVM => {
  const normalizeStatus = (status: string): AppointmentVM['status'] => {
    switch (status.toLowerCase()) {
      case 'scheduled':
      case 'agendado':
        return 'scheduled';
      case 'confirmed':
      case 'confirmado':
        return 'confirmed';
      case 'canceled':
      case 'cancelado':
        return 'canceled';
      case 'finished':
      case 'finalizado':
        return 'finished';
      default:
        return 'scheduled';
    }
  };

  return {
    id: apiAppointment.id,
    start: apiAppointment.start_date,
    end: apiAppointment.end_date,
    status: normalizeStatus(apiAppointment.status),
    patient: {
      id: apiAppointment.patient.id,
      name: apiAppointment.patient.name,
    },
    professional: {
      id: apiAppointment.professional.id,
      name: apiAppointment.professional.name,
      specialty: apiAppointment.professional.specialty,
    },
    room: apiAppointment.room,
    serviceName: apiAppointment.service?.name,
    notes: apiAppointment.notes,
  };
};

export const adaptAppointments = (apiAppointments: ApiAppointment[]): AppointmentVM[] => {
  return apiAppointments.map(adaptAppointment);
};