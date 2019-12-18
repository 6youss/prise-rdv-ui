import { ISignupBody } from "../../types";

export const docInitialState: ISignupBody = {
  username: "",
  password: "",
  confirmPassword: "",
  userType: "doctor",
  profile: {
    firstName: "",
    lastName: "",
    holidays: undefined
  }
};

export const patInitialState: ISignupBody = {
  username: "",
  password: "",
  confirmPassword: "",
  userType: "patient",
  profile: {
    firstName: "",
    lastName: ""
  }
};

export type ActionTypes = "PROFILE" | "USER";

interface Action {
  type: ActionTypes;
  payload: {
    field: string;
    value: string;
  };
}

export function reducer(state: ISignupBody, action: Action) {
  switch (action.type) {
    case "PROFILE":
      const field = action.payload.field.replace("profile.", "");
      return {
        ...state,
        profile: {
          ...state.profile,
          [field]: action.payload.value
        }
      };
    case "USER":
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
  }
}
