import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserTypeWhereUniqueInput } from "../userType/UserTypeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  address?: StringFilter;
  birthday?: DateTimeFilter;
  documents?: DocumentListRelationFilter;
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  phone?: StringFilter;
  role?: RoleWhereUniqueInput;
  state?: StringFilter;
  username?: StringFilter;
  userType?: UserTypeWhereUniqueInput;
  zip?: StringNullableFilter;
};
