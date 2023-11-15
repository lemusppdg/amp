import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TemplateWhereInput = {
  documents?: DocumentListRelationFilter;
  id?: StringFilter;
};
