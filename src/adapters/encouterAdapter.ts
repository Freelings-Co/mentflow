import { ApiEncounter } from "../types/api";
import { EncounterVM } from "../types/viewModels";

export const adaptEncounter = (apiEncounter: ApiEncounter): EncounterVM => {
  return {
    id: apiEncounter.id,
    date: apiEncounter.date,
    patient: {
      id: apiEncounter.patient.id,
      name: apiEncounter.patient.name,
    },
    professional: {
      id: apiEncounter.professional.id,
      name: apiEncounter.professional.name,
      specialty: apiEncounter.professional.specialty,
    },
    chiefComplaint: apiEncounter.chief_complaint,
    anamnesis: apiEncounter.anamnesis,
    diagnosis: apiEncounter.diagnosis,
    procedures: apiEncounter.procedures,
    prescriptions: apiEncounter.prescriptions,
    attachments: apiEncounter.attachments,
    billingLink: apiEncounter.billing_link,
  };
};

export const adaptEncounters = (apiEncounters: ApiEncounter[]): EncounterVM[] => {
  return apiEncounters.map(adaptEncounter);
};