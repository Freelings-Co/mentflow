export type PatientVM = {
  id: string;
  name: string;
  document?: string;
  birthDate?: string;
  age?: number;
  gender?: 'male' | 'female' | 'other' | 'unknown';
  contacts: { phone?: string; email?: string };
  address?: { city?: string; state?: string };
  photoUrl?: string;
  lastAppointmentDate?: string;
  nextAppointmentDate?: string;
};

export type ProfessionalVM = {
  id: string;
  name: string;
  specialty?: string;
};

export type AppointmentVM = {
  id: string;
  start: string;
  end: string;
  status: 'scheduled' | 'confirmed' | 'canceled' | 'finished';
  patient: Pick<PatientVM, 'id' | 'name'>;
  professional: ProfessionalVM;
  room?: string;
  serviceName?: string;
  notes?: string;
};

export type EncounterVM = {
  id: string;
  date: string;
  patient: Pick<PatientVM, 'id' | 'name'>;
  professional: ProfessionalVM;
  chiefComplaint?: string;
  anamnesis?: string;
  diagnosis?: string;
  procedures?: { code?: string; name: string }[];
  prescriptions?: { drug: string; dosage?: string; instructions?: string }[];
  attachments?: { id: string; name: string; url: string; type?: string }[];
  billingLink?: string;
};