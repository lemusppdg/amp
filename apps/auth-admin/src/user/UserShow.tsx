import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { USERTYPE_TITLE_FIELD } from "../userType/UserTypeTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Document"
          target="userId"
          label="Documents"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expiration_Date" source="expirationDate" />
            <TextField label="File" source="file" />
            <TextField label="ID" source="id" />
            <BooleanField label="isComplete" source="isComplete" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Template"
              source="template.id"
              reference="Template"
            >
              <TextField source={TEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
