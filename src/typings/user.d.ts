export interface ISignupBody {
  username: string;
  password: string;
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
