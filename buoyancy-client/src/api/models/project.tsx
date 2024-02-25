export type Project = {
  id: number;
  name: string;
  requiredRolesByWeek: ProjectRequiredRole[];
};

export type ProjectRequiredRole = {
  weekCommencing: string;
  requiredRoles: {
    roleId?: 1 | 2 | 3 | 4 | 5;
    roleName?: string;
    requiredHours: number;
  }[];
}
