import { DocumentUpdateManyWithoutUsersInput } from "./DocumentUpdateManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserTypeWhereUniqueInput } from "../userType/UserTypeWhereUniqueInput";

export type UserUpdateInput = {
  address?: string;
  birthday?: Date;
  documents?: DocumentUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  phone?: string;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  state?: string;
  username?: string;
  userType?: UserTypeWhereUniqueInput | null;
  zip?: string | null;
};
