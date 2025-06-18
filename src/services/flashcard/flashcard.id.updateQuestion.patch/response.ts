export interface UpdateQuestionFlashcardInput {
  idFlashcard: string;
  newQuestionContent: string;
}

export interface HttpResponse {
  newQuestionContent: string;
}
