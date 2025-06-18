export interface MetaDataProps {
  encoded: string;
}

export interface MetaData {
  props: MetaDataProps;
}

export interface FileProps {
  id: string;
  topicId: string;
  fileName: string;
  fileType: string;
  filePath: MetaData;
  uploadDate: string;
  isActive: boolean;
}

export interface File {
  props: File;
}
