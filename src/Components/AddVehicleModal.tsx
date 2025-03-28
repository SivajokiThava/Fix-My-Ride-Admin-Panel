import React, { useState } from "react";
import Button from "./Button";

interface AddVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (vehicleData: VehicleData) => void;
}

interface VehicleData {
  vehicleType: string;
  maxPassengers: number;
  maxBigSuitcase: number;
  maxBaggage: number;
  maxHandBaggage: number;
}

const AddVehicleModal: React.FC<AddVehicleModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const vehicleTypeOptions = [
    "4 Seater",
    "6 Seater",
    "8 Seater",
    "Mini Bus",
    "Two Wheeler",
    "Tuk Tuk (Auto)",
    "Bus",
  ];

  const [formData, setFormData] = useState<VehicleData>({
    vehicleType: "4 Seater",
    maxPassengers: 0,
    maxBigSuitcase: 0,
    maxBaggage: 0,
    maxHandBaggage: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "vehicleType" ? value : Number(value),
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4">Add Vehicle</h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="vehicleType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Vehicle Type
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {vehicleTypeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {[
            { name: "maxPassengers", label: "Max Passengers" },
            { name: "maxBigSuitcase", label: "Max Big Suitcase" },
            { name: "maxBaggage", label: "Max Baggage" },
            { name: "maxHandBaggage", label: "Max Hand-Baggage" },
          ].map(({ name, label }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {label}
              </label>
              <input
                type="number"
                id={name}
                name={name}
                value={formData[name as keyof VehicleData]}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <Button type="button" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleModal;
