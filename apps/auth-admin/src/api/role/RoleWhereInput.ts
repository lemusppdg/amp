import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RoleWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
  users?: UserListRelationFilter;
};
