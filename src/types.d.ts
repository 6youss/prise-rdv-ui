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

type FieldError = string | undefined;

type FieldErrors = Record<string, FieldError>;
