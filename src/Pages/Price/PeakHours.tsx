import React from "react";
import DataTable from "../../Components/DataTable";

interface PeakHour {
  vehicleType: string;
  timePeriod: string;
  value: string;
  created: string;
  status: string;
}

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], item: T) => React.ReactNode;
}

const sampleData: PeakHour[] = [
  {
    vehicleType: "Sedan",
    timePeriod: "6:00 AM - 9:00 AM",
    value: "1.5x",
    created: "2024-02-10",
    status: "Active",
  },
  {
    vehicleType: "SUV",
    timePeriod: "5:00 PM - 8:00 PM",
    value: "2.0x",
    created: "2024-02-10",
    status: "Inactive",
  },
  {
    vehicleType: "Van",
    timePeriod: "12:00 PM - 3:00 PM",
    value: "1.2x",
    created: "2024-02-09",
    status: "Active",
  },
];

const PeakHours = () => {
  const columns: Column<PeakHour>[] = [
    { key: "vehicleType", header: "Vehicle Type" },
    { key: "timePeriod", header: "Time Period" },
    { key: "value", header: "Value" },
    { key: "created", header: "Created" },
    {
      key: "status",
      header: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            value === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      ),
    },
  ];

  const handleView = (peakHour: PeakHour) => {
    console.log("View peak hour:", peakHour);
  };

  const handleEdit = (_peakHour: PeakHour) => {};

  const handleDelete = (peakHour: PeakHour) => {
    console.log("Delete peak hour:", peakHour);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Peak Hours</h1>

      {/* DataTable View */}
      <div className="p-4">
        <DataTable
          columns={columns}
          data={sampleData}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default PeakHours;
