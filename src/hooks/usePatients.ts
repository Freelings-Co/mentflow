import { useQuery } from "@tanstack/react-query";
import { PatientVM } from "../types/viewModels";
import { ApiPatient } from "../types/api";
import { adaptPatients } from "../adapters/patientAdapter";

const fetchPatients = async (search?: string, page = 1, limit = 20): Promise<{ patients: PatientVM[]; total: number }> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(search && { search }),
  });

  const response = await fetch(`/api/patients?${params}`);
  if (!response.ok) throw new Error('Erro ao buscar pacientes');
  
  const data = await response.json();
  return {
    patients: adaptPatients(data.patients as ApiPatient[]),
    total: data.total,
  };
};

export const usePatients = (search?: string, page = 1, limit = 20) => {
  return useQuery({
    queryKey: ['patients', search, page, limit],
    queryFn: () => fetchPatients(search, page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};