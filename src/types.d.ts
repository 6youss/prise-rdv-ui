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

export interface JoiErrorDetail {
  message: string;
  path: string[];
  type: string;
}
export interface JoiError {
  details: JoiErrorDetail[];
  inner: { path: string; message: string; type: string }[];
}

type FieldError = string;

export type FieldErrors = Record<string, FieldError>;
