// External Libraries
import { useState } from "react";

// Types
import { SignUpInfos } from "@pages/SignUp/types";

export function useSignUp() {
  // States
  const [signUpInfos, setSignUpInfos] = useState<SignUpInfos>({
    name: "",
    email: "",
    password: "",
  });

  // Functions
  function handleChange(signUpInfos: Partial<SignUpInfos>) {
    setSignUpInfos((prev) => ({ ...prev, ...signUpInfos }));
  }

  async function handleSubmit() {
    try {
      console.log("Login enviado:", signUpInfos);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  return {
    signUpInfos,
    handleChange,
    handleSubmit,
  };
}
