// External Libraries
import { useState } from "react";

// Utils
import {
  checkLoginErrors,
  makeInitialErrors,
  makeInitialLoginInfos,
} from "./utils";

// Types
import type { LoginInfos } from "@pages/Login/types";
import type { LoginErrors } from "@pages/Login/types/loginErrors";

export function useLogin() {
  // States
  const [loginInfos, setLoginInfos] = useState<LoginInfos>(
    makeInitialLoginInfos
  );
  const [errors, setErrors] = useState<LoginErrors>(makeInitialErrors);

  // Functions
  function handleChange(loginInfo: Partial<LoginInfos>) {
    setErrors(makeInitialErrors);
    setLoginInfos((prev) => ({ ...prev, ...loginInfo }));
  }

  async function handleSubmit() {
    const errors = checkLoginErrors(loginInfos);
    setErrors(errors);

    if (Object.values(errors).some((error) => error)) return;

    try {
      console.log("Login enviado:", loginInfos);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  return {
    errors,
    loginInfos,
    handleChange,
    handleSubmit,
  };
}
