type PlannedVsAvailableHoursProps = {
  plannedHours: number;
  availableHours: number;
};

const PlannedVsAvailableHours = ({
  plannedHours,
  availableHours,
}: PlannedVsAvailableHoursProps) => {
  if (plannedHours === 0 && availableHours === 0) {
    return <span className="text-gray-500">-</span>;
  }
  if (plannedHours < availableHours) {
    return (
      <span className="text-yellow-500">
        <b>
          {plannedHours} / {availableHours}
        </b>{" "}
        (-{availableHours - plannedHours})
      </span>
    );
  }

  if (plannedHours > availableHours) {
    return (
      <span className="text-red-500">
        <b>
          {plannedHours} / {availableHours}
        </b>{" "}
        (+{plannedHours - availableHours})
      </span>
    );
  }

  return <span className="text-green-500">{plannedHours}</span>;
};

export default PlannedVsAvailableHours;
