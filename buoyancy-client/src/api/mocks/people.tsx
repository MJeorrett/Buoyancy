import { Person } from "../models/person";

const people: Person[] = [
  {
    id: 1,
    name: "John Doe",
    roleId: 1,
    roleName: "Tech Lead",
    hours: [
      { weekCommencing: "2024-02-26", plannedHours: 37, availableHours: 37 },
      { weekCommencing: "2024-03-04", plannedHours: 37, availableHours: 37 },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    roleId: 2,
    roleName: "Tester",
    hours: [
      { weekCommencing: "2024-02-26", plannedHours: 39, availableHours: 37 },
      { weekCommencing: "2024-03-04", plannedHours: 37, availableHours: 37 },
    ],
  },
  {
    id: 3,
    name: "John Smith",
    roleId: 3,
    roleName: "Front End Developer",
    hours: [
      { weekCommencing: "2024-02-26", plannedHours: 37, availableHours: 37 },
      { weekCommencing: "2024-03-04", plannedHours: 36, availableHours: 37 },
    ],
  },
  {
    id: 4,
    name: "Jane Smith",
    roleId: 4,
    roleName: "Back End Developer",
    hours: [
      { weekCommencing: "2024-02-26", plannedHours: 37, availableHours: 37 },
      { weekCommencing: "2024-03-04", plannedHours: 0, availableHours: 0 },
    ],
  },
  {
    id: 5,
    name: "John Johnson",
    roleId: 5,
    roleName: "Designer",
    hours: [
      { weekCommencing: "2024-02-26", plannedHours: 30, availableHours: 30 },
      { weekCommencing: "2024-03-04", plannedHours: 25, availableHours: 30 },
    ],
  },
  {
    id: 6,
    name: "Jane Johnson",
    roleId: 1,
    roleName: "Tech Lead",
    hours: [
      { weekCommencing: "2024-02-26", plannedHours: 37, availableHours: 37 },
      { weekCommencing: "2024-03-04", plannedHours: 37, availableHours: 37 },
    ],
  },
  {
    id: 7,
    name: "John Brown",
    roleId: 2,
    roleName: "Tester",
    hours: [
      { weekCommencing: "2024-02-26", plannedHours: 37, availableHours: 37 },
      { weekCommencing: "2024-03-04", plannedHours: 15, availableHours: 15 },
    ],
  },
  {
    id: 8,
    name: "Jane Brown",
    roleId: 3,
    roleName: "Front End Developer",
    hours: [
      { weekCommencing: "2024-02-26", plannedHours: 37, availableHours: 37 },
      { weekCommencing: "2024-03-04", plannedHours: 37, availableHours: 37 },
    ],
  },
  {
    id: 9,
    name: "John White",
    roleId: 6,
    roleName: "Project Manager",
    hours: [
      { weekCommencing: "2024-02-26", plannedHours: 37, availableHours: 37 },
      { weekCommencing: "2024-03-04", plannedHours: 40, availableHours: 37 },
    ],
  },
  {
    id: 10,
    name: "Jane White",
    roleId: 5,
    roleName: "Designer",
    hours: [
      { weekCommencing: "2024-02-26", plannedHours: 20, availableHours: 37 },
      { weekCommencing: "2024-03-04", plannedHours: 37, availableHours: 37 },
    ],
  },
];

export default people;
