import React from "react";
import Input from "../styled/StyledInput";
import FullScreenWrapper from "../styled/FullScreenWrapper";
import FormWrapper from "../styled/FormWrapper";
import Button from "../styled/Button";
import LoadingDots from "../styled/LoadingDots";
import RowWrapper from "../styled/RowWrapper";
import StyledLink from "../styled/StyledLink";
import { toast } from "react-toastify";
import { fetchSignup } from "../api/userAPI";
import { useHistory } from "react-router";
import { ISignupBody } from "../typings/user";
import H4 from "../styled/H4";

const docInitialState: ISignupBody = {
  username: "",
  password: "",
  userType: "doctor",
  profile: {
    firstName: "",
    lastName: "",
    holidays: undefined
  }
};
const patInitialState: ISignupBody = {
  username: "",
  password: "",
  userType: "patient",
  profile: {
    firstName: "",
    lastName: ""
  }
};

interface Action {
  type: "PROFILE" | "USER";
  payload: {
    field: string;
    value: string;
  };
}

function reducer(state: ISignupBody, action: Action) {
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

const Signup: React.FC = () => {
  const [store, dispatch] = React.useReducer(reducer, docInitialState);

  function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
  }
  function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {}

  return (
    <FullScreenWrapper>
      <FormWrapper>
        <Input placeholder="Nom d'utilisateur" />
        <Input placeholder="Mot de passe" />
        <Input placeholder="Confirmation de mot de passe" />
        <Input placeholder="Nom" />
        <Input placeholder="Prénom" />
        <RowWrapper justify="space-between">
          <Button>S'inscrire</Button>
          <H4>What's up doc !</H4>
        </RowWrapper>
      </FormWrapper>
    </FullScreenWrapper>
  );
};

export default Signup;
