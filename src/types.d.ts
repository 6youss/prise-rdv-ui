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

export interface YupValidationError {
  inner: { path: string; message: string; type: string }[];
  path: string;
  message: string;
  type: string;
}

type FieldError = string;

export type FieldErrors = Record<string, FieldError>;
