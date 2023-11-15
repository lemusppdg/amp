import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ROLE_TITLE_FIELD } from "./RoleTitle";
import { USERTYPE_TITLE_FIELD } from "../userType/UserTypeTitle";

export const RoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="roleId" label="Users">
          <Datagrid rowClick="show">
            <TextField label="Street_Address" source="address" />
            <TextField label="Birthday" source="birthday" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Phone" source="phone" />
            <ReferenceField label="Role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Roles" source="roles" />
            <TextField label="State" source="state" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
            <ReferenceField
              label="User_Type"
              source="usertype.id"
              reference="UserType"
            >
              <TextField source={USERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Zip_Code" source="zip" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
