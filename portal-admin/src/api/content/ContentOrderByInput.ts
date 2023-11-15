import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  createdAt?: SortOrder;
  files?: SortOrder;
  header?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
