import { UserType as TUserType } from "../api/userType/UserType";

export const USERTYPE_TITLE_FIELD = "title";

export const UserTypeTitle = (record: TUserType): string => {
  return record.title?.toString() || String(record.id);
};
