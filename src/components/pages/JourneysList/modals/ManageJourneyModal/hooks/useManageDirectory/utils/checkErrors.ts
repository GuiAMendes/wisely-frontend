import { JourneyErros, JourneyInfos } from "../types/journeyInfos";

export function checkErrors(directory: JourneyInfos): JourneyErros {
  return {
    name: directory.name ? `` : `Campo obrigatorio`,
  };
}
