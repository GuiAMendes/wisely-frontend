import { SignUpInfos } from "@pages/SignUp/types";
import { Payload } from "@services/user/register.post/request";

export function buildPayload(infos: SignUpInfos): Payload {
  return {
    username: infos.name,
    email: infos.email,
    password: infos.password,
  };
}
