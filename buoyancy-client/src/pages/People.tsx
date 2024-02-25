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

type PlannedVsAvailableHoursProps = {
  plannedHours: number;
  availableHours: number;
};

const PlannedVsAvailableHours = ({ plannedHours, availableHours}: PlannedVsAvailableHoursProps) => {
  if (plannedHours === 0 && availableHours === 0) {
    return <span className="text-gray-500">-</span>;
  }
  if (plannedHours < availableHours) {
    return <span className="text-yellow-500"><b>{plannedHours} / {availableHours}</b> (-{availableHours-plannedHours})</span>;
  }

  if (plannedHours > availableHours) {
    return <span className="text-red-500"><b>{plannedHours} / {availableHours}</b> (+{plannedHours-availableHours})</span>;
  }

  return <span className="text-green-500">{plannedHours}</span>;
}

const PeoplePage = () => {
  const weekHeadings = mockPeople[0].hours.map(
    (week) => week.weekCommencing
  );

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
              <RoleCellContents
                Icon={roleIcons[person.roleId]}
                name={person.roleName}
              />
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
