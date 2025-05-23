export interface DirectoryProps {
  id: string;
  idUser: string;
  directoryName: string;
  createdAt: string;
  updatedAt: string;
  isCompleted: boolean;
  isActive: boolean;
  isTemplate: boolean;
}

export interface Directory {
  props: DirectoryProps;
}

export interface HttpResponse {
  directories: Directory[];
}
