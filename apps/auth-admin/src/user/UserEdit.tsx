import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { RoleTitle } from "../role/RoleTitle";
import { UserTypeTitle } from "../userType/UserTypeTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Street_Address" source="address" />
        <DateTimeInput label="Birthday" source="birthday" />
        <ReferenceArrayInput
          source="documents"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Phone" source="phone" />
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="State" source="state" />
        <TextInput label="Username" source="username" />
        <ReferenceInput
          source="userType.id"
          reference="UserType"
          label="User_Type"
        >
          <SelectInput optionText={UserTypeTitle} />
        </ReferenceInput>
        <TextInput label="Zip_Code" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
