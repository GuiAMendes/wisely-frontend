export interface NoteProps {
  content: string;
}

export interface Note {
  props: NoteProps;
}

export interface SummaryProps {
  id: string;
  idTopic: string;
  title: string;
  note: Note;
  createdAt: string;
  updatedAt: string;
  completedAt: string;
  isActive: boolean;
}

export interface  Summary {
  props: SummaryProps;
}
