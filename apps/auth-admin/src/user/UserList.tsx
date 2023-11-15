import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { USERTYPE_TITLE_FIELD } from "../userType/UserTypeTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
