import { DateTimeFilter } from "../../util/DateTimeFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  expirationDate?: DateTimeFilter;
  file?: JsonFilter;
  id?: StringFilter;
  isComplete?: BooleanFilter;
  name?: StringFilter;
  template?: TemplateWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
