import React from "react";

import { toast } from "react-toastify";
import { fetchSignup } from "../../api/userAPI";
import { useHistory, useParams } from "react-router";

import { reducer, ActionTypes, docInitialState, patInitialState } from "./reducer";
import { FormWrapper, RowWrapper, Button, FullScreenWrapper, H4, LoadingDots, StyledInput } from "../../styled";

const Signup: React.FC = () => {
  const history = useHistory();
  const params = useParams<{ userType: "doctor" | "patient" }>();
  const isDoctor = params.userType === "doctor";
  const [store, dispatch] = React.useReducer(reducer, isDoctor ? docInitialState : patInitialState);
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    setLoading(true);

    fetchSignup(store).then(
      data => {
        toast(data.message, {
          type: "success",
          hideProgressBar: true
        });
        history.push("/");
      },
      reason => {
        toast(reason.message, {
          type: "error",
          hideProgressBar: true
        });
        setLoading(false);
      }
    );
  }

  function onInputChange(field: string, type: ActionTypes) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type, payload: { field, value: e.target.value } });
    };
  }

  return (
    <FullScreenWrapper>
      <FormWrapper>
        <StyledInput placeholder="Nom d'utilisateur" onChange={onInputChange("username", "USER")} />
        <StyledInput placeholder="Mot de passe" type="password" onChange={onInputChange("password", "USER")} />
        <StyledInput
          placeholder="Confirmation de mot de passe"
          type="password"
          onChange={onInputChange("password", "USER")}
        />
        <StyledInput placeholder="Nom" onChange={onInputChange("firstName", "PROFILE")} />
        <StyledInput placeholder="Prénom" onChange={onInputChange("lastName", "PROFILE")} />
        <RowWrapper justify="space-between">
          <Button disabled={loading} type="submit" onClick={handleSubmit}>
            {!loading ? "Inscrire" : <LoadingDots />}
          </Button>
          <H4>{isDoctor ? "What's up doc !" : "Patient Inscription"}</H4>
        </RowWrapper>
      </FormWrapper>
    </FullScreenWrapper>
  );
};

export default Signup;
