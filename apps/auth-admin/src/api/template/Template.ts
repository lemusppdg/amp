import { Document } from "../document/Document";

export type Template = {
  createdAt: Date;
  documents?: Array<Document>;
  id: string;
  updatedAt: Date;
};
