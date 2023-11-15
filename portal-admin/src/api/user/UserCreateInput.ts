import { DocumentCreateNestedManyWithoutUsersInput } from "./DocumentCreateNestedManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserTypeWhereUniqueInput } from "../userType/UserTypeWhereUniqueInput";

export type UserCreateInput = {
  address: string;
  birthday: Date;
  documents?: DocumentCreateNestedManyWithoutUsersInput;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  role?: RoleWhereUniqueInput | null;
  roles: InputJsonValue;
  state: string;
  username: string;
  userType?: UserTypeWhereUniqueInput | null;
  zip?: string | null;
};
