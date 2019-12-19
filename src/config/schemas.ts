import * as yup from "yup";

export const signUpSchema = yup.object({
  username: yup
    .string()
    .min(3)
    .max(30)
    .required(),

  password: yup.string().required(),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),

  userType: yup.string().required(),

  profile: yup.object({
    firstName: yup
      .string()
      .min(3)
      .max(30)
      .required(),

    lastName: yup
      .string()
      .min(3)
      .max(30)
      .required()
  })
});
