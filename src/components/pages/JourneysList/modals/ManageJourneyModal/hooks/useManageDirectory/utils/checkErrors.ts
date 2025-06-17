import { JourneyErros, JourneyInfos } from "../types/journeyInfos";
import { makeInitialErrors } from "./makeInitialErrors";

export function checkErrors(journey: JourneyInfos): JourneyErros {
  const errors = makeInitialErrors();

  if (!journey.name) errors.name = `Campo obrigatorio`;
  if (journey.name.length < 8)
    errors.name = "O nome da Jornada deve ter no mínimo 8 caracteres";
  if (!journey.type) errors.type = "Campo obrigatorio";

  return errors;
}
