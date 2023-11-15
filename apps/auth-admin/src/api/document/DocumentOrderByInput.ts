import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  isComplete?: SortOrder;
  name?: SortOrder;
  templateId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
