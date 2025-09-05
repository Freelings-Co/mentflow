import { useQuery } from "@tanstack/react-query";
import { EncounterVM } from "../types/viewModels";
import { ApiEncounter } from "../types/api";
import { adaptEncounters } from "../adapters/encouterAdapter"

const fetchEncounters = async (patientId?: string): Promise<EncounterVM[]> => {
  const params = new URLSearchParams();
  if (patientId) params.append('patient_id', patientId);

  const response = await fetch(`/api/encounters?${params}`);
  if (!response.ok) throw new Error('Erro ao buscar atendimentos');
  
  const data = await response.json();
  return adaptEncounters(data as ApiEncounter[]);
};

export const useEncounters = (patientId?: string) => {
  return useQuery({
    queryKey: ['encounters', patientId],
    queryFn: () => fetchEncounters(patientId),
    enabled: !!patientId,
    staleTime: 5 * 60 * 1000,
  });
};

const fetchEncounter = async (id: string): Promise<EncounterVM> => {
  const response = await fetch(`/api/encounters/${id}`);
  if (!response.ok) throw new Error('Erro ao buscar atendimento');
  
  const data = await response.json();
  return adaptEncounters([data as ApiEncounter])[0];
};

export const useEncounter = (id: string) => {
  return useQuery({
    queryKey: ['encounter', id],
    queryFn: () => fetchEncounter(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};