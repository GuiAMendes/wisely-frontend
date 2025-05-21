import { LoginInfos } from "@pages/Login/types";

export function makeInitialLoginInfos(): LoginInfos {
  return {
    email: "",
    password: "",
  };
}
