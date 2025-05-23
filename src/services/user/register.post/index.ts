import API from "@services/api";
import { Payload } from "./request";

export async function postRegister(payload: Payload) {
  const url = "/register";

  const response = await API.post(url, payload);
  return response.data;
}
