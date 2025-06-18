export interface QuestionProps {
  value: string;
}

export interface Question {
  props: QuestionProps;
}

export interface ResponseProps {
  value: string;
}

export interface Response {
  props: ResponseProps;
}

export interface FlashcardProps {
  id: string;
  topicId: string;
  question: Question;
  response: Response;
  createdAt: string;
  updatedAt: string;
  completedAt: string;
  isActive: boolean;
}

export interface Flashcard {
  props: FlashcardProps;
}
