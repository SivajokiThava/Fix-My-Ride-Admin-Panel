import { useState } from "react";
import DataTable from "../Components/DataTable";

interface Job {
  jobId: string;
  jobType: string;
  dateTime: string;
  deliveryLocation: string;
  vehicleType: string;
  payment: string;
  driver: string;
}

interface Column<T> {
  key: keyof T;
  header: string;
}

const Jobs = () => {
  const [activeTab, setActiveTab] = useState("accepted");

  const tabs = [
    { id: "accepted", label: "Accepted Jobs" },
    { id: "pending", label: "Pending for dispatch" },
  ];

  const acceptedJobs: Job[] = [
    {
      jobId: "JOB001",
      jobType: "Delivery",
      dateTime: "2024-02-08 10:00 AM",
      deliveryLocation: "123 Main St",
      vehicleType: "Van",
      payment: "$50",
      driver: "John Doe",
    },
  ];

  const pendingJobs: Job[] = [
    {
      jobId: "JOB002",
      jobType: "Pickup",
      dateTime: "2024-02-08 02:00 PM",
      deliveryLocation: "456 Oak Ave",
      vehicleType: "Truck",
      payment: "$75",
      driver: "Pending",
    },
  ];

  const columns: Column<Job>[] = [
    { key: "jobId", header: "Job Id" },
    { key: "jobType", header: "Job Type" },
    { key: "dateTime", header: "Date and Time" },
    { key: "deliveryLocation", header: "Location" },
    { key: "vehicleType", header: "Vehicle" },
    { key: "payment", header: "Payment" },
    { key: "driver", header: "Driver" },
  ];

  const handleView = (job: Job) => {
    console.log("View job:", job);
  };

  const handleEdit = (job: Job) => {
    console.log("Edit job:", job);
  };

  const handleDelete = (job: Job) => {
    console.log("Delete job:", job);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Jobs Management</h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Mobile Tab Navigation */}
        <div className="block md:hidden">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full p-3 border-b border-gray-200 bg-white text-lg font-medium"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Tab Navigation */}
        <div className="hidden md:flex justify-center border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-8 text-lg font-medium border-b-2 transition-colors min-w-[200px] text-center ${
                activeTab === tab.id
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-500 hover:text-gray-700 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* DataTable View */}
        <div className="p-4">
          <DataTable
            data={activeTab === "accepted" ? acceptedJobs : pendingJobs}
            columns={columns}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
