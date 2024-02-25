import clsx from "clsx";

type PlannedVsAvailableHoursProps = {
  plannedHours: number;
  availableHours: number;
  danger?: "high" | "low";
  className?: string;
};

const PlannedVsAvailableHours = ({
  plannedHours,
  availableHours,
  danger = "high",
  className,
}: PlannedVsAvailableHoursProps) => {
  if (plannedHours === 0 && availableHours === 0) {
    return <span className={clsx("text-gray-500", className)}>-</span>;
  }

  if (plannedHours < availableHours) {
    return (
      <span
        className={clsx(
          danger === "high" ? "text-yellow-500" : "text-red-500",
          className
        )}
      >
        <b>
          {plannedHours} / {availableHours}
        </b>{" "}
        (-{availableHours - plannedHours})
      </span>
    );
  }

  if (plannedHours > availableHours) {
    return (
      <span
        className={clsx(
          danger === "high" ? "text-red-500" : "text-yellow-500",
          className
        )}
      >
        <b>
          {plannedHours} / {availableHours}
        </b>{" "}
        (+{plannedHours - availableHours})
      </span>
    );
  }

  return <span className={clsx("text-green-500")}>{plannedHours}</span>;
};

export default PlannedVsAvailableHours;
