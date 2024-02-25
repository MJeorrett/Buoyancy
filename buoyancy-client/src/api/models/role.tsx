import { RoleId } from "../../constants/roles";
import { PlannedAndAvailableHours } from "./common";

export type Role = {
  id: RoleId;
  name: string;
  hours: PlannedAndAvailableHours[];
};
