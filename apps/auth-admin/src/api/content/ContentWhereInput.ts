import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContentWhereInput = {
  files?: JsonFilter;
  header?: StringFilter;
  id?: StringFilter;
  images?: JsonFilter;
  text?: StringNullableFilter;
};
