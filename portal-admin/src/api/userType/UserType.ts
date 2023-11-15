import { User } from "../user/User";

export type UserType = {
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
