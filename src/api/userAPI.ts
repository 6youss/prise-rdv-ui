import { BASE_URL } from "../config/strings";

async function fetchLogin(username: string, password: string) {
  const res = await fetch(BASE_URL + "/user/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    const error = await res.json();
    throw new Error(error);
  }
}
