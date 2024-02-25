import { RoleId, roleIcons } from "../constants/roles";

type RoleNameProps = {
  roleId: RoleId;
  roleName: string;
};

const RoleName = ({ roleId, roleName }: RoleNameProps) => {
  const Icon = roleIcons[roleId];

  return (
    <p className="inline-flex items-center space-x-2">
      <Icon size={24} />
      <span>{roleName}</span>
    </p>
  );
};

export default RoleName;
