import React, { useState } from "react";
import Button from "../../Components/Button";

// Interfaces
interface VehicleTypesByCountry {
  country: string;
  vehicleTypes: {
    [key: string]: boolean;
  };
}

interface VehicleAssignmentData {
  country: string;
  state: string;
  city: string;
  selectedVehicleTypes: string[];
}

interface AssignVehicleTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: VehicleAssignmentData) => void;
}

interface VehicleTypeOption {
  id: string;
  name: string;
  checked: boolean;
}

// Modal Component
const AssignVehicleTypeModal: React.FC<AssignVehicleTypeModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<VehicleAssignmentData>({
    country: "United Kingdom",
    state: "",
    city: "",
    selectedVehicleTypes: [],
  });

  const [vehicleTypes, setVehicleTypes] = useState<VehicleTypeOption[]>([
    { id: "1", name: "4 Seater", checked: true },
    { id: "2", name: "6 Seater", checked: true },
    { id: "3", name: "8 Seater", checked: true },
    { id: "4", name: "Mini Bus", checked: false },
    { id: "5", name: "Tuk Tuk(Auto)", checked: false },
    { id: "6", name: "Two Wheeler", checked: false },
    { id: "7", name: "Bus", checked: false },
  ]);

  const handleVehicleTypeChange = (id: string) => {
    setVehicleTypes((types) =>
      types.map((type) =>
        type.id === id ? { ...type, checked: !type.checked } : type
      )
    );
  };

  const handleSave = () => {
    const selectedTypes = vehicleTypes
      .filter((type) => type.checked)
      .map((type) => type.name);
    onSave({ ...formData, selectedVehicleTypes: selectedTypes });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <h2 className="text-xl font-bold">Assign Vehicle Type to Country</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Add Vehicle Types</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="w-full border rounded-md p-2"
                  >
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Srilanka</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    State
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="w-full border rounded-md p-2"
                  >
                    <option>Select</option>
                    <option>Karnataka</option>
                    <option>Tamilnadu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <select
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full border rounded-md p-2"
                  >
                    <option>Select</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Vehicle Type
                  </label>
                  <div className="space-y-2 max-h-48 overflow-y-auto border rounded-md p-2">
                    {vehicleTypes.map((type) => (
                      <div key={type.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={type.id}
                          checked={type.checked}
                          onChange={() => handleVehicleTypeChange(type.id)}
                          className="mr-2"
                        />
                        <label htmlFor={type.id}>{type.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const TypesByCountry: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countries, setCountries] = useState<VehicleTypesByCountry[]>([
    {
      country: "United Kingdom",
      vehicleTypes: {
        "4 Seater": true,
        "6 Seater": true,
        "8 Seater": true,
        Auto: false,
        "Mini Bus": false,
      },
    },
    {
      country: "India- Tamilnadu",
      vehicleTypes: {
        "4 Seater": true,
        "6 Seater": true,
        "8 Seater": false,
        Auto: true,
        "Mini Bus": false,
      },
    },
    {
      country: "India- Karnataka",
      vehicleTypes: {
        "4 Seater": true,
        "6 Seater": true,
        "8 Seater": true,
        Auto: true,
        "Mini Bus": true,
      },
    },
    {
      country: "Srilanka",
      vehicleTypes: {
        "4 Seater": true,
        "6 Seater": false,
        "8 Seater": true,
        Auto: true,
        "Mini Bus": false,
      },
    },
  ]);

  const allVehicleTypes = [
    "4 Seater",
    "6 Seater",
    "8 Seater",
    "Auto",
    "Mini Bus",
  ];

  const handleSaveVehicleTypes = (data: VehicleAssignmentData) => {
    // Handle saving the new vehicle types
    const newCountry: VehicleTypesByCountry = {
      country: data.state ? `${data.country}- ${data.state}` : data.country,
      vehicleTypes: allVehicleTypes.reduce(
        (acc, type) => ({
          ...acc,
          [type]: data.selectedVehicleTypes.includes(type),
        }),
        {}
      ),
    };

    setCountries([...countries, newCountry]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">
          Available Vehicle Types by Country
        </h1>
        <Button onClick={() => setIsModalOpen(true)}>Add New</Button>
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Country</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {countries.map((countryData, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 pr-4 w-48">{countryData.country}</td>
                  <td>
                    <div className="flex flex-wrap gap-4">
                      {allVehicleTypes.map((type) => {
                        if (type in countryData.vehicleTypes) {
                          return (
                            <div key={type} className="flex items-center">
                              <div
                                className={`w-4 h-4 border ${
                                  countryData.vehicleTypes[type]
                                    ? "bg-blue-500"
                                    : "bg-white"
                                } flex items-center justify-center`}
                              >
                                {countryData.vehicleTypes[type] && (
                                  <span className="text-white text-xs">✓</span>
                                )}
                              </div>
                              <span className="ml-2">{type}</span>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AssignVehicleTypeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveVehicleTypes}
      />
    </div>
  );
};

export default TypesByCountry;
