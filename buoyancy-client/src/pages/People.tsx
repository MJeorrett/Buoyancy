import PageLayout from "../components/PageLayout";
import mockPeople from "../api/mocks/people";
import Table from "../components/Table";

const PeoplePage = () => {
  return (
    <PageLayout heading="People">
      <Table
        data={mockPeople}
        headings={["ID", "Name"]}
        renderRowCells={(person) => (
          <>
            <td className="px-6 py-4 whitespace-nowrap">{person.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
          </>
        )}
      />
    </PageLayout>
  );
};

export default PeoplePage;
