import { LoginErrors } from "@pages/Login/types/loginErrors";

export function makeInitialErrors(): LoginErrors {
  return {
    email: "",
    password: "",
  };
}
