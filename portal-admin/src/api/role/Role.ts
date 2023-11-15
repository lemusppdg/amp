import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  description: string | null;
  id: string;
  title: string;
  updatedAt: Date;
  users?: Array<User>;
};
