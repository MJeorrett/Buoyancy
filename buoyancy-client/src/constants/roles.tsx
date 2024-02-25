import { UserCircleGear, MagnifyingGlass, PaintBrush, Sidebar, DesktopTower, IconProps } from "@phosphor-icons/react"

export const rolesByIds = {
  1: "Tech Lead",
  2: "Tester",
  3: "Front End Developer",
  4: "Back End Developer",
  5: "Designer",
}

export type RoleId = keyof typeof rolesByIds;

export const roleIcons: {[key in RoleId]: (props: IconProps) => React.ReactElement} = {
  1: props => <UserCircleGear color="dodgerblue" {...props} />,
  2: props => <MagnifyingGlass color="orange" {...props} />,
  3: props => <Sidebar color="green" {...props} />,
  4: props => <DesktopTower color="darkBlue" {...props} />,
  5: props => <PaintBrush color="purple" {...props} />,
} as const;
