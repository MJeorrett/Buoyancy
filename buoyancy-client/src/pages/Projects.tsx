import PageLayout from "../components/PageLayout";
import mockProjects from "../api/mocks/projects";
import Table from "../components/Table";
import { roleIcons } from "../constants/roles";
import { IconProps } from "@phosphor-icons/react";
import PlannedVsAvailableHours from "../components/PlannedVsAvailableHours";

type RoleHoursProps = {
  requiredHours: number;
  plannedHours: number;
  Icon: React.FC<IconProps>;
};

const RoleHours = ({ requiredHours, plannedHours, Icon }: RoleHoursProps) => (
  <p className="flex space-x-2 items-center">
    <Icon size={18} color={requiredHours === plannedHours ? "black" : undefined} />
    <PlannedVsAvailableHours
      className="min-w-4 text-center"
      plannedHours={plannedHours}
      availableHours={requiredHours}
      danger="low"
    />
  </p>
);

const ProjectsPage = () => {
  const weekHeadings = mockProjects[0].requiredRolesByWeek.map(
    (role) => role.weekCommencing
  );
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
                      plannedHours={role.plannedHours}
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
