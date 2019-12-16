import React from "react";
import Input from "../../styled/StyledInput";
import FullScreenWrapper from "../../styled/FullScreenWrapper";
import FormWrapper from "../../styled/FormWrapper";
import Button from "../../styled/Button";
import LoadingDots from "../../styled/LoadingDots";
import RowWrapper from "../../styled/RowWrapper";
import StyledLink from "../../styled/StyledLink";
import { toast } from "react-toastify";
import { fetchSignup } from "../../api/userAPI";
import { useHistory, useParams } from "react-router";

import H4 from "../../styled/H4";
import { reducer, ActionTypes, docInitialState, patInitialState } from "./reducer";

const Signup: React.FC = () => {
  const params = useParams<{ userType: "doctor" | "patient" }>();
  const [store, dispatch] = React.useReducer(reducer, params.userType === "doctor" ? docInitialState : patInitialState);

  function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    alert(JSON.stringify(store));
  }
  function onInputChange(field: string, type: ActionTypes) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type, payload: { field, value: e.target.value } });
    };
  }

  return (
    <FullScreenWrapper>
      <FormWrapper>
        <Input placeholder="Nom d'utilisateur" onChange={onInputChange("username", "USER")} />
        <Input placeholder="Mot de passe" type="password" onChange={onInputChange("password", "USER")} />
        <Input
          placeholder="Confirmation de mot de passe"
          type="password"
          onChange={onInputChange("password", "USER")}
        />
        <Input placeholder="Nom" onChange={onInputChange("firstName", "PROFILE")} />
        <Input placeholder="Prénom" onChange={onInputChange("lastName", "PROFILE")} />
        <RowWrapper justify="space-between">
          <Button onClick={handleSubmit}>S'inscrire</Button>
          <H4>What's up doc !</H4>
        </RowWrapper>
      </FormWrapper>
    </FullScreenWrapper>
  );
};

export default Signup;
