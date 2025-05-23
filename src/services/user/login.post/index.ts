import API from "@services/api";
import { Payload } from "./request";

export async function postLogin(payload: Payload) {
  const url = "/login";

  const response = await API.post(url, payload);
  return response.data;
}
