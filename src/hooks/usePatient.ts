import { useQuery } from "@tanstack/react-query";
import { PatientVM } from "../types/viewModels";
import { ApiPatient } from "../types/api";
import { adaptPatient } from "../adapters/patientAdapter";

const fetchPatient = async (id: string): Promise<PatientVM> => {
  const response = await fetch(`/api/patients/${id}`);
  if (!response.ok) throw new Error('Erro ao buscar paciente');
  
  const data = await response.json();
  return adaptPatient(data as ApiPatient);
};

export const usePatient = (id: string) => {
  return useQuery({
    queryKey: ['patient', id],
    queryFn: () => fetchPatient(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};