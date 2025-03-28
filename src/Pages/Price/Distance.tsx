import React, { useState } from "react";
import DataTable from "../../Components/DataTable";
import { Save, X } from "lucide-react";
import Button from "../../Components/Button";

type DistanceData = {
  vehicleType: string;
  minCharge: string;
  additionalKm: string;
  status: string;
  createdAt: string;
  id?: string;
};

const Distance = () => {
  const [distances, setDistances] = useState<DistanceData[]>([]);
  const [formData, setFormData] = useState<Omit<DistanceData, "createdAt">>({
    vehicleType: "2 Wheeler",
    minCharge: "",
    additionalKm: "",
    status: "Active",
  });
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [editingId, setEditingId] = useState<string | null>(null);

  const vehicleTypes = ["2 Wheeler", "3 Wheeler", "4 Wheeler"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const resetForm = () => {
    setFormData({
      vehicleType: "2 Wheeler",
      minCharge: "",
      additionalKm: "",
      status: "Active",
    });
    setSelectedDate(new Date().toISOString().split("T")[0]);
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setDistances((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...formData,
                createdAt: selectedDate,
                id: editingId,
              }
            : item
        )
      );
    } else {
      // Add new record
      const newDistance: DistanceData = {
        ...formData,
        createdAt: selectedDate,
        id: Math.random().toString(36).substr(2, 9), // Simple ID generation
      };
      setDistances((prev) => [...prev, newDistance]);
    }
    resetForm();
  };

  const handleView = (item: DistanceData) => {
    console.log("Viewing item:", item);
  };

  const handleEdit = (item: DistanceData) => {
    setFormData({
      vehicleType: item.vehicleType,
      minCharge: item.minCharge,
      additionalKm: item.additionalKm,
      status: item.status,
    });
    setSelectedDate(item.createdAt);
    setEditingId(item.id ?? null);
  };

  const handleDelete = (item: DistanceData) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setDistances((prev) => prev.filter((d) => d.id !== item.id));
    }
  };

  const FormHeader = () => (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-4 p-4 bg-white border-b">
          <div>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            >
              {vehicleTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input
              type="number"
              name="minCharge"
              value={formData.minCharge}
              onChange={handleInputChange}
              placeholder="Min Charge"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>

          <div>
            <input
              type="number"
              name="additionalKm"
              value={formData.additionalKm}
              onChange={handleInputChange}
              placeholder="Additional KM"
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>

          <div>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>

          <div className="flex gap-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={formData.status === "Active"}
                onChange={handleInputChange}
                className="form-radio h-4 w-4"
              />
              <span className="ml-1 text-sm">Active</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={formData.status === "Inactive"}
                onChange={handleInputChange}
                className="form-radio h-4 w-4"
              />
              <span className="ml-1 text-sm">Inactive</span>
            </label>
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="px-3 py-1 flex items-center">
              <Save size={14} className="mr-1" />
              {editingId ? "Update" : "Save"}
            </Button>
            <button
              type="button"
              onClick={resetForm}
              className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 flex items-center"
            >
              <X size={14} className="mr-1" />
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  const columns: { key: keyof DistanceData; header: string }[] = [
    {
      key: "vehicleType",
      header: "Vehicle Type",
    },
    {
      key: "minCharge",
      header: "Min Charge",
    },
    {
      key: "additionalKm",
      header: "Additional KM",
    },
    {
      key: "createdAt",
      header: "Created At",
    },
    {
      key: "status",
      header: "Status",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Drivers</h1>
      <div className="p-6">
        <FormHeader />
        <DataTable
          data={distances}
          columns={columns}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Distance;
