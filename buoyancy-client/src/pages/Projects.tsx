import PageLayout from "../components/PageLayout";
import mockProjects from "../api/mocks/projects";
import Table from "../components/Table";

const ProjectsPage = () => {
  return <PageLayout heading="Projects">
    <Table
        data={mockProjects}
        headings={["ID", "Name"]}
        renderRowCells={(project) => (
          <>
            <td className="px-6 py-4 whitespace-nowrap">{project.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{project.name}</td>
          </>
        )}
      />
  </PageLayout>;
};

export default ProjectsPage;
