import { RoleId } from "../../constants/roles";

export type Person = {
  id: number;
  name: string;
  roleId: RoleId;
  roleName: string;
};
