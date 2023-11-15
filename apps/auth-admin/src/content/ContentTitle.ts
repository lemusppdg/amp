import { Content as TContent } from "../api/content/Content";

export const CONTENT_TITLE_FIELD = "header";

export const ContentTitle = (record: TContent): string => {
  return record.header?.toString() || String(record.id);
};
