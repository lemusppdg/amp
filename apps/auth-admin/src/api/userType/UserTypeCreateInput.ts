import { UserCreateNestedManyWithoutUserTypesInput } from "./UserCreateNestedManyWithoutUserTypesInput";

export type UserTypeCreateInput = {
  title?: string | null;
  users?: UserCreateNestedManyWithoutUserTypesInput;
};
