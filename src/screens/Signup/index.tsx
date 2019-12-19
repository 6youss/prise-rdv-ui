import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { fetchSignup } from "../../api/userAPI";
import { useParams } from "react-router";
import { reducer, ActionTypes, doctorInitialState, patientInitialState } from "./reducer";
import { FormWrapper, RowWrapper, Button, FullScreenWrapper, H4, LoadingDots, StyledInput } from "../../styled";
import { signUpSchema, parseErrorSchema } from "../../config/schemas";
import { FieldErrors } from "../../types";

const Signup: React.FC = () => {
  const params = useParams<{ userType: "doctor" | "patient" }>();
  const isDoctor = params.userType === "doctor";

  const [store, dispatch] = React.useReducer(reducer, isDoctor ? doctorInitialState : patientInitialState);

  const [errors, setErrors] = React.useState({} as FieldErrors);

  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    const validation = signUpSchema.validate(store, { abortEarly: false });

    if (validation.error) return setErrors(parseErrorSchema(validation.error));

    setErrors({});
    setLoading(true);
    fetchSignup(store).then(
      data => {
        toast(data.message, {
          type: "success"
        });
      },
      reason => {
        toast(reason.message, {
          type: "error"
        });
        setLoading(false);
      }
    );
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    const type: ActionTypes = field.includes("profile.") ? "PROFILE" : "USER";

    dispatch({ type, payload: { field, value } });
  };

  async function validateForm() {
    const { error } = signUpSchema.validate(store, { abortEarly: false });
    if (error) return setErrors(parseErrorSchema(error));
    setErrors({});
  }

  //if errors exist, validate on every store change
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      validateForm();
    }
  }, [store]);

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
