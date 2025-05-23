import { useState } from "react";

// Hooks
import { useLogin as useAuthLogin } from "@contexts/AuthContext";

// Utils
import {
  checkLoginErrors,
  makeInitialErrors,
  makeInitialLoginInfos,
} from "./utils";

// Types
import type { LoginInfos } from "@pages/Login/types";
import type { LoginErrors } from "@pages/Login/types/loginErrors";
import { useRouter } from "next/router";

export function useLogin() {
  // States
  const [loginInfos, setLoginInfos] = useState<LoginInfos>(
    makeInitialLoginInfos
  );
  const [errors, setErrors] = useState<LoginErrors>(makeInitialErrors);

  // Hooks
  const { push } = useRouter();
  const { login, error: authError, isLoading } = useAuthLogin();

  function handleChange(loginInfo: Partial<LoginInfos>) {
    setErrors(makeInitialErrors);
    setLoginInfos((prev) => ({ ...prev, ...loginInfo }));
  }

  async function handleSubmit() {
    const validationErrors = checkLoginErrors(loginInfos);
    setErrors(validationErrors);

    if (Object.values(validationErrors).some((e) => e)) return;

    await login({
      email: loginInfos.email,
      password: loginInfos.password,
    });

    push("/");
  }

  return {
    errors,
    authError,
    isLoading,
    loginInfos,
    handleChange,
    handleSubmit,
  };
}
