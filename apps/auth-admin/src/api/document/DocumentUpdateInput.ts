import { InputJsonValue } from "../../types";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  expirationDate?: Date;
  file?: InputJsonValue;
  isComplete?: boolean;
  name?: string;
  template?: TemplateWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
