import { ApiPatient } from '../types/api';
import { PatientVM } from '../types/viewModels';

export const adaptPatient = (apiPatient: ApiPatient): PatientVM => {
  const calculateAge = (birthDate?: string): number | undefined => {
    if (!birthDate) return undefined;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const normalizeGender = (gender?: string): PatientVM['gender'] => {
    switch (gender?.toLowerCase()) {
      case 'male':
      case 'masculino':
      case 'm':
        return 'male';
      case 'female':
      case 'feminino':
      case 'f':
        return 'female';
      case 'other':
      case 'outro':
        return 'other';
      default:
        return 'unknown';
    }
  };

  return {
    id: apiPatient.id,
    name: apiPatient.name,
    document: apiPatient.cpf,
    birthDate: apiPatient.birth_date,
    age: calculateAge(apiPatient.birth_date),
    gender: normalizeGender(apiPatient.gender),
    contacts: {
      phone: apiPatient.phone,
      email: apiPatient.email,
    },
    address: apiPatient.address,
    photoUrl: apiPatient.photo_url,
    // Estes campos serão preenchidos por outras consultas se necessário
    lastAppointmentDate: undefined,
    nextAppointmentDate: undefined,
  };
};

export const adaptPatients = (apiPatients: ApiPatient[]): PatientVM[] => {
  return apiPatients.map(adaptPatient);
};