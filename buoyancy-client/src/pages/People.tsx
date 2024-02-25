import PageLayout from "../components/PageLayout";
import mockPeople from "../api/mocks/people";
import Table from "../components/Table";
import { IconProps } from "@phosphor-icons/react";
import { roleIcons } from "../constants/roles";

type RoleCellContentsProps = {
  Icon: (props: IconProps) => JSX.Element;
  name: string;
};

const RoleCellContents = ({ Icon, name }: RoleCellContentsProps) => (
  <p className="inline-flex items-center space-x-2">
    <Icon size={24} />
    <span>{name}</span>
  </p>
);

const PeoplePage = () => {
  return (
    <PageLayout heading="People">
      <Table
        data={mockPeople}
        headings={["ID", "Name", "Role"]}
        renderRowCells={(person) => (
          <>
            <td className="px-6 py-4 whitespace-nowrap">{person.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <RoleCellContents
                Icon={roleIcons[person.roleId]}
                name={person.roleName}
              />
            </td>
          </>
        )}
      />
    </PageLayout>
  );
};

export default PeoplePage;
