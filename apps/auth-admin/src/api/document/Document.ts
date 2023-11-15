import { JsonValue } from "type-fest";
import { Template } from "../template/Template";
import { User } from "../user/User";

export type Document = {
  createdAt: Date;
  expirationDate: Date;
  file: JsonValue;
  id: string;
  isComplete: boolean;
  name: string;
  template?: Template | null;
  updatedAt: Date;
  user?: User | null;
};
