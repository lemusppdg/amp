import { Document } from "../document/Document";
import { Role } from "../role/Role";
import { JsonValue } from "type-fest";
import { UserType } from "../userType/UserType";

export type User = {
  address: string;
  birthday: Date;
  createdAt: Date;
  documents?: Array<Document>;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  role?: Role | null;
  roles: JsonValue;
  state: string;
  updatedAt: Date;
  username: string;
  userType?: UserType | null;
  zip: string | null;
};
