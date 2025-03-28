import { useState } from "react";
import DataTable from "../../Components/DataTable";
import OperatorEditModal from "../../Components/OperatorEditModal";

interface Operator {
  operatorName: string;
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

const sampleData: Operator[] = [
  {
    operatorName: "Michael Chen",
    location: "San Francisco",
    phoneNo: "+1 (555) 234-5678",
    licenseNo: "OP-789012",
    status: "Active",
    more: "View Details",
  },
  {
    operatorName: "Emma Wilson",
    location: "Chicago",
    phoneNo: "+1 (555) 876-5432",
    licenseNo: "OP-345678",
    status: "Inactive",
    more: "View Details",
  },
];

const Operators = () => {
  const [selectedOperator, setSelectedOperator] = useState<Operator | null>(
    null
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const columns: Column<Operator>[] = [
    { key: "operatorName", header: "Operator Name" },
    { key: "location", header: "Location" },
    { key: "phoneNo", header: "Phone No" },
    { key: "licenseNo", header: "License No" },
    { key: "status", header: "Status" },
  ];

  const handleView = (operator: Operator) => {
    console.log("View operator:", operator);
  };

  const handleDelete = (operator: Operator) => {
    console.log("Delete operator:", operator);
  };

  const handleEdit = (operator: Operator) => {
    setSelectedOperator(operator);
    setIsEditModalOpen(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Operators</h1>

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
      <OperatorEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        operator={selectedOperator}
      />
    </div>
  );
};

export default Operators;
