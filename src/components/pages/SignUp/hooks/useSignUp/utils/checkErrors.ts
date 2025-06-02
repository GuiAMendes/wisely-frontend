import { SignUpErrors, SignUpInfos } from "@pages/SignUp/types";

export function checkLoginErrors(signUpInfos: SignUpInfos): SignUpErrors {
  const errors: SignUpErrors = {
    name: "",
    email: "",
    password: "",
  };

  if (!signUpInfos.email) {
    errors.email = "Campo obrigatório";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpInfos.email)) {
    errors.email = "Email inválido";
  }

  if (!signUpInfos.name) errors.name = "Campo obrigatório";

  if (!signUpInfos.password) {
    errors.password = "Campo obrigatório";
  } else if (signUpInfos.password.length < 10) {
    errors.password = "A senha deve ter pelo menos 10 caracteres";
  } else if (!/[A-Z]/.test(signUpInfos.password)) {
    errors.password = "A senha deve conter pelo menos uma letra maiúscula";
  } else if (!/[a-z]/.test(signUpInfos.password)) {
    errors.password = "A senha deve conter pelo menos uma letra minúscula";
  } else if (!/[0-9]/.test(signUpInfos.password)) {
    errors.password = "A senha deve conter pelo menos um número";
  } else if (!/[^A-Za-z0-9]/.test(signUpInfos.password)) {
    errors.password = "A senha deve conter pelo menos um caractere especial";
  }

  return errors;
}
