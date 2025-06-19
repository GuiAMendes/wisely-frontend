import { JourneyErros, JourneyInfos } from "../types/journeyInfos";
import { makeInitialErrors } from "./makeInitialErrors";

export function checkErrors(journey: JourneyInfos): JourneyErros {
  const errors = makeInitialErrors();

  if (!journey.name) errors.name = `Journey name is required`;
  if (journey.name.length < 8)
    errors.name = "The journey name must be at least 8 characters long";
  if (!journey.type) errors.type = "Journey type is required";

  return errors;
}
