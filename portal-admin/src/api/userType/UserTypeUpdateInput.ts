import { UserUpdateManyWithoutUserTypesInput } from "./UserUpdateManyWithoutUserTypesInput";

export type UserTypeUpdateInput = {
  title?: string | null;
  users?: UserUpdateManyWithoutUserTypesInput;
};
