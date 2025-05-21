// External Libraries
import { useState } from "react";

// Types
import { LoginInfos } from "@pages/Login/types";

export function useLogin() {
  // States
  const [loginInfos, setLoginInfos] = useState<LoginInfos>({
    email: "",
    password: "",
  });

  // Functions
  function handleChange(loginInfo: Partial<LoginInfos>) {
    setLoginInfos((prev) => ({ ...prev, ...loginInfo }));
  }

  async function handleSubmit() {
    try {
      console.log("Login enviado:", loginInfos);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  return {
    loginInfos,
    handleChange,
    handleSubmit,
  };
}
