import { Settings } from "../types";

export interface UpdateSettingsInput {
  userId: string;
  newSettings: Settings;
}

export interface HttpResponse {
  status: string;
}
