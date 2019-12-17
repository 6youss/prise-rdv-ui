import { BASE_URL } from "../config/strings";
import { ISignupBody } from "../typings/user";

export async function fetchLogin(username: string, password: string) {
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
    throw new Error(error.message);
  }
}

export async function fetchSignup(body: ISignupBody) {
  const res = await fetch(BASE_URL + "/user/signup", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    const error = await res.json();
    throw new Error(error.message);
  }
}
