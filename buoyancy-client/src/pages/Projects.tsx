import PageLayout from "../components/PageLayout";
import mockProjects from "../api/mocks/projects";
import Table from "../components/Table";
import { roleIcons } from "../constants/roles";
import { IconProps } from "@phosphor-icons/react";

type RoleHoursProps = {
  requiredHours: number;
  Icon: React.FC<IconProps>;
};

const RoleHours = ({ requiredHours, Icon }: RoleHoursProps) => (
  <p className="flex space-x-2 items-center">
    {requiredHours > 0 && (
      <>
        <Icon size={18} />
        <span className="min-w-4 text-center">
          {Math.round((requiredHours / 7.5) * 2) / 2}
        </span>
      </>
    )}
    {requiredHours === 0 && (
      <>
        <Icon size={18} color="lightGrey" />
        <span className="min-w-4 text-center text-gray-300 font-bold">
          -
        </span>
      </>
    )}
  </p>
);

const ProjectsPage = () => {
  const weekHeadings = mockProjects[0].requiredRolesByWeek.map((role) => role.weekCommencing);
  return (
    <PageLayout heading="Projects">
      <Table
        data={mockProjects}
        headings={["ID", "Name", ...weekHeadings]}
        renderRowCells={(project) => (
          <>
            <td className="px-6 py-4 whitespace-nowrap">{project.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{project.name}</td>
            {project.requiredRolesByWeek.map((requiredRolesForWeek) => (
              <td
                className="px-6 py-4 whitespace-nowrap"
                key={requiredRolesForWeek.weekCommencing}
              >
                {requiredRolesForWeek.requiredRoles
                  .filter((role) => role.roleId)
                  .map((role) => (
                    <RoleHours
                      key={role.roleId}
                      requiredHours={role.requiredHours}
                      Icon={roleIcons[role.roleId!]}
                    />
                  ))}
              </td>
            ))}
          </>
        )}
      />
    </PageLayout>
  );
};

export default ProjectsPage;
