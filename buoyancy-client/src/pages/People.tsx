import PageLayout from "../components/PageLayout";
import mockPeople from "../api/mocks/people";
import Table from "../components/Table";
import PlannedVsAvailableHours from "../components/PlannedVsAvailableHours";
import RoleName from "../components/RoleName";

const PeoplePage = () => {
  const weekHeadings = mockPeople[0].hours.map((week) => week.weekCommencing);

  return (
    <PageLayout heading="People">
      <Table
        data={mockPeople}
        headings={["ID", "Name", "Role", ...weekHeadings]}
        renderRowCells={(person) => (
          <>
            <td className="px-6 py-4 whitespace-nowrap">{person.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <RoleName roleId={person.roleId} roleName={person.roleName} />
            </td>
            {person.hours.map((week) => (
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

export default PeoplePage;
