import { Project } from "../models/project";

const projects: Project[] = [
  {
    id: 1,
    name: "S2D",
    requiredRolesByWeek: [
      {
        weekCommencing: "2024-02-26",
        requiredRoles: [
          {
            roleId: 2,
            roleName: "Tester",
            requiredHours: 0,
          },
          {
            roleId: 1,
            roleName: "Tech Lead",
            requiredHours: 37,
          },
        ],
      },
      {
        weekCommencing: "2024-03-04",
        requiredRoles: [
          {
            roleId: 2,
            roleName: "Tester",
            requiredHours: 37,
          },
          {
            roleId: 1,
            roleName: "Tech Lead",
            requiredHours: 20,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Siccar",
    requiredRolesByWeek: [
      {
        weekCommencing: "2024-02-26",
        requiredRoles: [
          {
            roleId: 3,
            roleName: "Front End Developer",
            requiredHours: 72,
          },
          {
            roleId: 2,
            roleName: "Tester",
            requiredHours: 37,
          },
          {
            roleId: 5,
            roleName: "Designer",
            requiredHours: 5,
          }
        ],
      },
      {
        weekCommencing: "2024-03-04",
        requiredRoles: [
          {
            roleId: 3,
            roleName: "Front End Developer",
            requiredHours: 72,
          },
          {
            roleId: 2,
            roleName: "Tester",
            requiredHours: 37,
          },
          {
            roleId: 5,
            roleName: "Designer",
            requiredHours: 0,
          }
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Zonal",
    requiredRolesByWeek: [
      {
        weekCommencing: "2024-02-26",
        requiredRoles: [
          {
            roleId: 4,
            roleName: "Back End Developer",
            requiredHours: 15,
          },
          {
            roleId: 3,
            roleName: "Front End Developer",
            requiredHours: 15,
          },
        ],
      },
      {
        weekCommencing: "2024-03-04",
        requiredRoles: [
          {
            roleId: 4,
            roleName: "Back End Developer",
            requiredHours: 0,
          },
          {
            roleId: 3,
            roleName: "Front End Developer",
            requiredHours: 0,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Wolfson",
    requiredRolesByWeek: [
      {
        weekCommencing: "2024-02-26",
        requiredRoles: [
          {
            roleId: 3,
            roleName: "Front End Developer",
            requiredHours: 37,
          },
          {
            roleId: 2,
            roleName: "Tester",
            requiredHours: 0,
          },
          {
            roleId: 5,
            roleName: "Designer",
            requiredHours: 10,
          }
        ],
      },
      {
        weekCommencing: "2024-03-04",
        requiredRoles: [
          {
            roleId: 3,
            roleName: "Front End Developer",
            requiredHours: 15,
          },
          {
            roleId: 2,
            roleName: "Tester",
            requiredHours: 10,
          },
          {
            roleId: 5,
            roleName: "Designer",
            requiredHours: 0,
          }
        ],
      },
    ],
  },
];

export default projects;
