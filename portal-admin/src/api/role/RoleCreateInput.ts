import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  title: string;
  users?: UserCreateNestedManyWithoutRolesInput;
};
