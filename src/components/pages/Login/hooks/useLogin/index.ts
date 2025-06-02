import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/router";

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

export function useLogin() {
  const [loginInfos, setLoginInfos] = useState<LoginInfos>(
    makeInitialLoginInfos
  );
  const [errors, setErrors] = useState<LoginErrors>(makeInitialErrors);

  const { push } = useRouter();
  const { login, isLoading } = useAuthLogin();

  function handleChange(loginInfo: Partial<LoginInfos>) {
    setErrors(makeInitialErrors);
    setLoginInfos((prev) => ({ ...prev, ...loginInfo }));
  }

  async function handleLogin() {
    const validationErrors = checkLoginErrors(loginInfos);
    setErrors(validationErrors);

    if (Object.values(validationErrors).some((e) => e)) return;

    try {
      await login({
        email: loginInfos.email,
        password: loginInfos.password,
      });

      push("/");
    } catch (err) {
      const loginError = err as Error;
      toast.error(loginError.message);
    }
  }

  return {
    errors,
    isLoading,
    loginInfos,
    handleChange,
    handleLogin,
  };
}
