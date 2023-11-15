import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ContentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Header" source="header" />
        <div />
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
