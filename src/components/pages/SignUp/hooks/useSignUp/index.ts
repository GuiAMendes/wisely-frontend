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
import { createSettings } from "@services/settings";

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

  async function handleSignUp() {
    const errors = checkLoginErrors(signUpInfos);

    setErrors(errors);

    if (Object.values(errors).some((error) => error)) return;

    try {
      const response = await postRegister(buildPayload(signUpInfos));
      if (response) {
        await createSettings({ userId: response.id });
      }
      push("/login");
    } catch (error) {
      console.error("Erro no registro:", error);
    }
  }

  return {
    errors,
    signUpInfos,
    handleChange,
    handleSignUp,
  };
}
