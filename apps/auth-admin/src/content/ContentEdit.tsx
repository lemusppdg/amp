import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Header" source="header" />
        <div />
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
