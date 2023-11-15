import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  address?: SortOrder;
  birthday?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  roleId?: SortOrder;
  roles?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  userTypeId?: SortOrder;
  zip?: SortOrder;
};
