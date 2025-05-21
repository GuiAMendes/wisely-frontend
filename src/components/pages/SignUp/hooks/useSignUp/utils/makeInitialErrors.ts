import { SignUpErrors } from "@pages/SignUp/types";

export function makeInitialErrors(): SignUpErrors {
  return {
    name: "",
    email: "",
    password: "",
  };
}
