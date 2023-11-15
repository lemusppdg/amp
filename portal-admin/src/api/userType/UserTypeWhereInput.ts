import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type UserTypeWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  users?: UserListRelationFilter;
};
