import { Flashcard } from "../types";

export interface ListAllFlashcardInput {
  idTopic: string;
}

export interface HttpResponse {
  flashcards: Flashcard[];
}
