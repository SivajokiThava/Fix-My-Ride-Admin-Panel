import React, { useState } from "react";
import Button from "./Button";

interface AddChargeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ChargeFormData) => void;
}

interface ChargeFormData {
  name: string;
  country: string;
  state: string;
  city: string;
  chargeType: "Flat" | "Percentage";
  value: string;
  increaseDecrease: "Increase" | "Decrease";
  baseFare: string;
}

interface LocationData {
  countries: string[];
  states: { [country: string]: string[] };
  cities: { [state: string]: string[] };
}

const AddChargeModal: React.FC<AddChargeModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  // Sample data - replace with actual data source
  const locationData: LocationData = {
    countries: ["United Kingdom"],
    states: {
      "United Kingdom": ["London"],
    },
    cities: {
      London: ["London"],
    },
  };

  const baseFareList = [
    "Basefare List 1",
    "Basefare List 2",
    "Basefare List 3",
  ];

  const [formData, setFormData] = useState<ChargeFormData>({
    name: "",
    country: "United Kingdom",
    state: "London",
    city: "London",
    chargeType: "Percentage",
    value: "40",
    increaseDecrease: "Increase",
    baseFare: baseFareList[0],
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: "Flat" | "Percentage") => {
    setFormData((prev) => ({ ...prev, chargeType: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-xl font-semibold mb-6">Night Time Charges</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Charges</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="mb-1 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border rounded p-2"
                    />
                  </div>

                  <div className="flex items-center space-x-6">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={formData.chargeType === "Flat"}
                        onChange={() => handleRadioChange("Flat")}
                        className="form-radio"
                      />
                      <span>Flat</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={formData.chargeType === "Percentage"}
                        onChange={() => handleRadioChange("Percentage")}
                        className="form-radio"
                      />
                      <span>Percentage</span>
                    </label>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 font-medium">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="border rounded p-2"
                    >
                      {locationData.countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex space-x-4">
                    <input
                      type="text"
                      name="value"
                      value={formData.value}
                      onChange={handleInputChange}
                      className="border rounded p-2 w-24"
                    />
                    <select
                      name="increaseDecrease"
                      value={formData.increaseDecrease}
                      onChange={handleInputChange}
                      className="border rounded p-2 flex-grow"
                    >
                      <option value="Increase">Increase</option>
                      <option value="Decrease">Decrease</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 font-medium">State</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="border rounded p-2"
                    >
                      {locationData.states[formData.country]?.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 font-medium">Base Fare</label>
                    <select
                      name="baseFare"
                      value={formData.baseFare}
                      onChange={handleInputChange}
                      className="border rounded p-2 flex-grow"
                    >
                      {baseFareList.map((fare) => (
                        <option key={fare} value={fare}>
                          {fare}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 font-medium">City</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="border rounded p-2"
                    >
                      {locationData.cities[formData.state]?.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button type="submit">Create</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChargeModal;
