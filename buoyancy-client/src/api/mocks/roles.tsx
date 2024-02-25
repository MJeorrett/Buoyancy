import { RoleId, rolesByIds } from "../../constants/roles";
import { PlannedAndAvailableHours } from "../models/common";
import { Role } from "../models/role";
import people from "./people";

const roles: Role[] = Object.keys(rolesByIds).map((roleIdString) => {
  const roleId = parseInt(roleIdString) as RoleId;

  const hours: PlannedAndAvailableHours[] = people[0].hours.map((week) => ({
    weekCommencing: week.weekCommencing,
    plannedHours: 0,
    availableHours: 0,
  }));

  people.filter((person) => person.roleId === roleId).forEach((person) => {
    person.hours.forEach((week, index) => {
      hours[index].plannedHours += week.plannedHours;
      hours[index].availableHours += week.availableHours;
    });
  });

  return {
    id: roleId,
    name: rolesByIds[parseInt(roleIdString) as RoleId],
    hours,
  };
}).sort((a, b) => a.name.localeCompare(b.name));

export default roles;
