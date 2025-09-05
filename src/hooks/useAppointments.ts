import { useQuery } from "@tanstack/react-query";
import { AppointmentVM } from "../types/viewModels";
import { ApiAppointment } from "../types/api";
import { adaptAppointments } from "../adapters/appointmentAdapter";

const fetchAppointments = async (
  startDate?: string,
  endDate?: string,
  professionalId?: string
): Promise<AppointmentVM[]> => {
  const params = new URLSearchParams();
  if (startDate) params.append('start_date', startDate);
  if (endDate) params.append('end_date', endDate);
  if (professionalId) params.append('professional_id', professionalId);

  const response = await fetch(`/api/appointments?${params}`);
  if (!response.ok) throw new Error('Erro ao buscar agendamentos');
  
  const data = await response.json();
  return adaptAppointments(data as ApiAppointment[]);
};

export const useAppointments = (startDate?: string, endDate?: string, professionalId?: string) => {
  return useQuery({
    queryKey: ['appointments', startDate, endDate, professionalId],
    queryFn: () => fetchAppointments(startDate, endDate, professionalId),
    staleTime: 2 * 60 * 1000, // 2 minutos
  });
};