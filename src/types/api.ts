// Tipos da API do iClinic (baseados na documentação)
export interface ApiPatient {
  id: string;
  name: string;
  cpf?: string;
  birth_date?: string;
  gender?: string;
  phone?: string;
  email?: string;
  address?: {
    city?: string;
    state?: string;
  };
  photo_url?: string;
}

export interface ApiProfessional {
  id: string;
  name: string;
  specialty?: string;
}

export interface ApiAppointment {
  id: string;
  start_date: string;
  end_date: string;
  status: string;
  patient: ApiPatient;
  professional: ApiProfessional;
  room?: string;
  service?: { name?: string };
  notes?: string;
}

export interface ApiEncounter {
  id: string;
  date: string;
  patient: ApiPatient;
  professional: ApiProfessional;
  chief_complaint?: string;
  anamnesis?: string;
  diagnosis?: string;
  procedures?: { code?: string; name: string }[];
  prescriptions?: { drug: string; dosage?: string; instructions?: string }[];
  attachments?: { id: string; name: string; url: string; type?: string }[];
  billing_link?: string;
}