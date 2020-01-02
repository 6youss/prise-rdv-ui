export interface ISignupBody {
  username: string;
  password: string;
  confirmPassword: string;
  userType: "patient" | "doctor";
  profile: PatientProfile | DoctorProfile;
}

export interface PatientProfile {
  firstName: string;
  lastName: string;
}
export interface DoctorProfile {
  firstName: string;
  lastName: string;
  holidays: [Date];
}

export type FieldErrors = Record<string, string | Record<FieldErrors>>;
