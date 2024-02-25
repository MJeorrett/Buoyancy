import { RoleId } from "../../constants/roles";
import { PlannedAndAvailableHours } from "./common";

export type Person = {
  id: number;
  name: string;
  roleId: RoleId;
  roleName: string;
  hours: PlannedAndAvailableHours[];
};
