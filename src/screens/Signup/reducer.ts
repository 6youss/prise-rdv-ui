import { ISignupBody } from "../../typings/user";
export const docInitialState: ISignupBody = {
  username: "",
  password: "",  
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
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.payload.field]: action.payload.value
        }
      };
    case "USER":
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
  }
}
