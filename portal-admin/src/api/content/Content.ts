import { JsonValue } from "type-fest";

export type Content = {
  createdAt: Date;
  files: JsonValue;
  header: string;
  id: string;
  images: JsonValue;
  text: string | null;
  updatedAt: Date;
};
