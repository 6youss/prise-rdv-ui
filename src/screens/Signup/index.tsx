import React from "react";
import { toast } from "react-toastify";
import { fetchSignup } from "../../api/userAPI";
import { useHistory, useParams } from "react-router";
import {
  reducer,
  ActionTypes,
  docInitialState,
  patInitialState
} from "./reducer";
import {
  FormWrapper,
  RowWrapper,
  Button,
  FullScreenWrapper,
  H4,
  LoadingDots,
  StyledInput
} from "../../styled";
import { signUpSchema } from "../../config/schemas";

const Signup: React.FC = () => {
  const history = useHistory();
  const params = useParams<{ userType: "doctor" | "patient" }>();
  const isDoctor = params.userType === "doctor";
  const [store, dispatch] = React.useReducer(
    reducer,
    isDoctor ? docInitialState : patInitialState
  );
  const [errors, setErrors] = React.useState(undefined);

  const [loading, setLoading] = React.useState(false);
  const { error } = signUpSchema.validate(store);
  function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    if (!error) {
      setLoading(true);
      fetchSignup(store).then(
        data => {
          toast(data.message, {
            type: "success"
          });
          history.push("/");
        },
        reason => {
          toast(reason.message, {
            type: "error"
          });
          setLoading(false);
        }
      );
    } else {
      console.log(error.details);      

      toast(JSON.stringify(error.message), {
        type: "error",
        hideProgressBar: true
      });
    }
  }

  function onInputChange(field: string, type: ActionTypes) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type, payload: { field, value: e.target.value } });
    };
  }

  return (
    <FullScreenWrapper>
      <FormWrapper>
        <StyledInput
          placeholder="Nom d'utilisateur"
          onChange={onInputChange("username", "USER")}
        />
        <StyledInput
          placeholder="Mot de passe"
          type="password"
          onChange={onInputChange("password", "USER")}
        />
        <StyledInput
          placeholder="Confirmation de mot de passe"
          type="password"
          onChange={onInputChange("confirmPassword", "USER")}
        />
        <StyledInput
          placeholder="Nom"
          onChange={onInputChange("firstName", "PROFILE")}
        />
        <StyledInput
          placeholder="Prénom"
          onChange={onInputChange("lastName", "PROFILE")}
        />
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
