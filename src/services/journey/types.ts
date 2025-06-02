export interface JourneyProps {
  id: string;
  idDirectory: string;
  journeyName: string;
  typeOfJourney: string;
  createdAt: string;
  updatedAt: string;
  isCompleted: boolean;
  isActive: boolean;
}

export interface Journey {
  props: JourneyProps;
}
