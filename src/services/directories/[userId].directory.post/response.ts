export interface CreateDirectoryServiceInput {
  userId: string;
  name: string;
  isTemplate?: boolean;
}

export interface HttpResponse {
  id: string;
  name: string;
}
