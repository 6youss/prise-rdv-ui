import { BASE_URL } from "../config/strings";

export async function fetchDoctorSessions(doctorId: string) {
  const res = await fetch(`${BASE_URL}/sessions/doctor/${doctorId}`, {
    method: "get"
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    const error = await res.json();
    throw new Error(error.message);
  }
}
