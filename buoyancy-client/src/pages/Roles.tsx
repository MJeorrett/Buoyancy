import PageLayout from "../components/PageLayout";
import mockRoles from "../api/mocks/roles";
import Table from "../components/Table";
import PlannedVsAvailableHours from "../components/PlannedVsAvailableHours";
import RoleName from "../components/RoleName";

const RolesPage = () => {
  const weekHeadings = mockRoles[0].hours.map((week) => week.weekCommencing);

  return (
    <PageLayout heading="Roles">
      <Table
        data={mockRoles}
        headings={["ID", "Name", ...weekHeadings]}
        renderRowCells={(role) => (
          <>
            <td className="px-6 py-4 whitespace-nowrap">{role.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <RoleName roleId={role.id} roleName={role.name} />
            </td>
            {role.hours.map((week) => (
              <td className="px-6 py-4 whitespace-nowrap">
                <PlannedVsAvailableHours {...week} />
              </td>
            ))}
          </>
        )}
      />
    </PageLayout>
  );
};

export default RolesPage;
