import { SignUpInfos } from "@pages/SignUp/types";

export function makeInitialSignUpInfos(): SignUpInfos {
  return {
    name: "",
    email: "",
    password: "",
  };
}
