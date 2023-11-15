import { InputJsonValue } from "../../types";

export type ContentCreateInput = {
  files?: InputJsonValue;
  header: string;
  images?: InputJsonValue;
  text?: string | null;
};
