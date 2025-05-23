// External Libraries
import { useState } from "react";

// Services
import { postRegister } from "@services/user/register.post";

// Utils
import {
  checkLoginErrors,
  makeInitialErrors,
  buildPayload,
  makeInitialSignUpInfos,
} from "./utils";

// Types
import { SignUpErrors, SignUpInfos } from "@pages/SignUp/types";
import { useRouter } from "next/router";

export function useSignUp() {
  // States
  const [signUpInfos, setSignUpInfos] = useState<SignUpInfos>(
    makeInitialSignUpInfos
  );
  const [errors, setErrors] = useState<SignUpErrors>(makeInitialErrors);

  // Hooks
  const { push } = useRouter();

  // Functions
  function handleChange(signUpInfos: Partial<SignUpInfos>) {
    setSignUpInfos((prev) => ({ ...prev, ...signUpInfos }));
  }

  async function handleSubmit() {
    const errors = checkLoginErrors(signUpInfos);

    setErrors(errors);

    if (Object.values(errors).some((error) => error)) return;

    try {
      await postRegister(buildPayload(signUpInfos));
      push("/login");
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  return {
    errors,
    signUpInfos,
    handleChange,
    handleSubmit,
  };
}
