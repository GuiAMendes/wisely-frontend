export interface CreateFileInput {
  idTopic: string;
  fileName: string;
  fileType: string;
  fileContent: string;
}

export interface HttpResponse {
  id: string;
  fileName: string;
  fileType: string;
  fileContent: string;
}
