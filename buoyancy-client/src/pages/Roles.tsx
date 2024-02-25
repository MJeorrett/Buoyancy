import PageLayout from "../components/PageLayout";
import mockRoles from "../api/mocks/roles";
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

const RolesPage = () => {
  const weekHeadings = mockRoles[0].hours.map(
    (week) => week.weekCommencing
  );

  return (
    <PageLayout heading="People">
      <Table
        data={mockRoles}
        headings={["ID", "Name", ...weekHeadings]}
        renderRowCells={(role) => (
          <>
            <td className="px-6 py-4 whitespace-nowrap">{role.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <RoleCellContents
                Icon={roleIcons[role.id]}
                name={role.name}
              />
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
