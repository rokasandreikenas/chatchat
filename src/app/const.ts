import { User } from "@/types/user";
import * as Yup from "yup";

export const loginFormInitialValues: User = {
  email: "",
  password: "",
};

export const loginValidationSchema: Yup.ObjectSchema<User> = Yup.object().shape(
  {
    email: Yup.string().email("Email must be valid").required("Required"),
    password: Yup.string().required("Required"),
  }
);
