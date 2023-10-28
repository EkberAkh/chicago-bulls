import { object, string, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])([A-Za-z\d@$!%*?&.]{8,})$/


export const validationSchema = object().shape({
  username: string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Username is required"),
  email: string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .matches(emailRegex, "Please enter a valid email address")
    .required("Email is required"),
  password: string()
    .min(8, "Please enter a strong password")
    .matches(
      passwordRegex,
      `Your password must contain at least: 
      -one uppercase letter(ABC)
      -one lowercase letter(abc) 
      -one number(123) 
      -one special character(.@?)`
    )
    .required("Password is required"),
});

export const resolver = yupResolver(validationSchema)

export type UserSchema = InferType<typeof validationSchema>