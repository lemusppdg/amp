import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  description?: string | null;
  title?: string;
  users?: UserUpdateManyWithoutRolesInput;
};
