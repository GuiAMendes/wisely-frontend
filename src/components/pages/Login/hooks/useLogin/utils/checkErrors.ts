import type { LoginInfos } from "@pages/Login/types";
import type { LoginErrors } from "@pages/Login/types/loginErrors";

export function checkLoginErrors(loginInfos: LoginInfos): LoginErrors {
  const errors: LoginErrors = {
    email: "",
    password: "",
  };

  if (!loginInfos.email) {
    errors.email = "Campo obrigatório";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginInfos.email)) {
    errors.email = "Email inválido";
  }

  if (!loginInfos.password) {
    errors.password = "Campo obrigatório";
  } else if (loginInfos.password.length < 10) {
    errors.password = "A senha deve ter pelo menos 10 caracteres";
  } else if (!/[A-Z]/.test(loginInfos.password)) {
    errors.password = "A senha deve conter pelo menos uma letra maiúscula";
  } else if (!/[a-z]/.test(loginInfos.password)) {
    errors.password = "A senha deve conter pelo menos uma letra minúscula";
  } else if (!/[0-9]/.test(loginInfos.password)) {
    errors.password = "A senha deve conter pelo menos um número";
  }

  return errors;
}
