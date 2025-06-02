export interface JourneyInfos {
  name: string;
  type: TypeOfJourney;
}

export interface JourneyErros {
  name: string;
  type: string;
}

export type TypeOfJourney = "free" | "full";
