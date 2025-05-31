import { Journey } from "../types";

export interface ListAllInput {
  directoryId: string;
}

export interface HttpResponse {
  journeys: Journey[];
}
