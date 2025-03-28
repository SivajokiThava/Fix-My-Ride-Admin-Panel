import { useState } from "react";
import DataTable from "../../Components/DataTable";
import DriverEditModal from "../../Components/DriverEditModal";

interface Driver {
  driverName: string;
  location: string;
  phoneNo: string;
  licenseNo: string;
  status: string;
  more: string;
}

interface Column<T> {
  key: keyof T;
  header: string;
}

const sampleData: Driver[] = [
  {
    driverName: "John Smith",
    location: "New York City",
    phoneNo: "+1 (555) 123-4567",
    licenseNo: "DL-123456",
    status: "Active",
    more: "View Details",
  },
  {
    driverName: "Sarah Johnson",
    location: "Los Angeles",
    phoneNo: "+1 (555) 987-6543",
    licenseNo: "DL-789012",
    status: "On Trip",
    more: "View Details",
  },
];

const Drivers = () => {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const columns: Column<Driver>[] = [
    { key: "driverName", header: "Driver Name" },
    { key: "location", header: "Location" },
    { key: "phoneNo", header: "Phone No" },
    { key: "licenseNo", header: "License No" },
    { key: "status", header: "Status" },
    { key: "more", header: "More" },
  ];

  const handleView = (driver: Driver) => {
    console.log("View driver:", driver);
  };

  const handleDelete = (driver: Driver) => {
    console.log("Delete driver:", driver);
  };

  const handleEdit = (driver: Driver) => {
    setSelectedDriver(driver);
    setIsEditModalOpen(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Drivers</h1>

      {/* DataTable View */}
      <div className="p-4">
        <DataTable
          columns={columns}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          data={sampleData}
        />
      </div>
      {/* Edit Modal */}
      <DriverEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        driver={selectedDriver}
      />
    </div>
  );
};

export default Drivers;
