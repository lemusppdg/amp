import { InputJsonValue } from "../../types";

export type ContentUpdateInput = {
  files?: InputJsonValue;
  header?: string;
  images?: InputJsonValue;
  text?: string | null;
};
