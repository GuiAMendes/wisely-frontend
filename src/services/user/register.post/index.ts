import API from "@services/api";
import { Payload } from "./request";
import { RegisterResponse } from "./response";

export async function postRegister(payload: Payload) {
  const url = "/register";

  const response = await API.post<RegisterResponse>(url, payload);
  return response.data;
}
