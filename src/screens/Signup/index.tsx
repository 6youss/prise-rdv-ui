import React from "react";
import { toast } from "react-toastify";
import { fetchSignup } from "../../api/userAPI";
import { useHistory, useParams } from "react-router";
import { reducer, ActionTypes, docInitialState, patInitialState } from "./reducer";
import { FormWrapper, RowWrapper, Button, FullScreenWrapper, H4, LoadingDots, StyledInput } from "../../styled";

import { signUpSchema } from "../../config/schemas";
import { FieldErrors } from "../../types";

interface YupValidationError {
  inner: { path: string; message: string; type: string }[];
  path: string;
  message: string;
  type: string;
}

const Signup: React.FC = () => {
  const history = useHistory();
  const params = useParams<{ userType: "doctor" | "patient" }>();
  const isDoctor = params.userType === "doctor";

  const [store, dispatch] = React.useReducer(reducer, isDoctor ? docInitialState : patInitialState);

  const [errors, setErrors] = React.useState({} as FieldErrors);

  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    try {
      await signUpSchema.validate(store, { abortEarly: false });
      setErrors({});
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
    } catch (errors) {
      setErrors(parseErrorSchema(errors));
    }
  }

  function parseErrorSchema(errors: YupValidationError): FieldErrors {
    const errs: FieldErrors = {};
    errors.inner.forEach(error => {
      errs[error.path] = error.message;
    });
    return errs;
  }

  React.useEffect(() => {
    async function validateForm() {
      try {
        await signUpSchema.validate(store, { abortEarly: false });
        setErrors({});
      } catch (errors) {
        setErrors(parseErrorSchema(errors));
      }
    }
    if (Object.keys(errors).length > 0) validateForm();
  }, [store]);

  const onInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    const type: ActionTypes = field.includes("profile.") ? "PROFILE" : "USER";
    dispatch({ type, payload: { field, value } });
  }, []);
  return (
    <FullScreenWrapper>
      <FormWrapper>
        <StyledInput
          name="username"
          value={store.username}
          error={errors.username}
          placeholder="Nom d'utilisateur"
          onChange={onInputChange}
        />
        <StyledInput
          name="password"
          value={store.password}
          error={errors.password}
          placeholder="Mot de passe"
          type="password"
          onChange={onInputChange}
        />
        <StyledInput
          name="confirmPassword"
          value={store.confirmPassword}
          error={errors.confirmPassword}
          placeholder="Confirmation de mot de passe"
          type="password"
          onChange={onInputChange}
        />
        <StyledInput
          name="profile.firstName"
          value={store.profile.firstName}
          error={errors["profile.firstName"]}
          placeholder="Prénom"
          onChange={onInputChange}
        />
        <StyledInput
          name="profile.lastName"
          value={store.profile.lastName}
          error={errors["profile.lastName"]}
          placeholder="Nom"
          onChange={onInputChange}
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
