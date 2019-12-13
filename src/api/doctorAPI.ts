import { BASE_URL } from "../config/strings";

export async function fetchDoctors(searchValue: string) {
  const res = await fetch(
    `${BASE_URL}/doctor/${searchValue?searchValue:''}`,
    {
      method: "get"
    }
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    const error = await res.json();
    throw new Error(error.message);
  }
}
