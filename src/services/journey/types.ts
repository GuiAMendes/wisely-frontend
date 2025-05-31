export type TypeOfJourney = "free" | "full";

export interface JourneyProps {
  id: string;
  idDirectory: string;
  journeyName: string;
  typeOfJourney: TypeOfJourney;
  createdAt: string;
  updatedAt: string;
  isCompleted: boolean;
  isActive: boolean;
}

export interface Journey {
  props: JourneyProps;
}
