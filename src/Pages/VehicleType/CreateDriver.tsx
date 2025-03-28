import React, { useState } from "react";
import Button from "../../Components/Button";

interface DriverFormData {
  country: string;
  city: string;
  vehicleType: string;
  numberOfSeats: string;
  isLuxury: string;
}

interface SelectOption {
  value: string;
  label: string;
}

const CreateDriver: React.FC = () => {
  const [formData, setFormData] = useState<DriverFormData>({
    country: "United Kingdom",
    city: "London",
    vehicleType: "4 Seater",
    numberOfSeats: "4 Seats",
    isLuxury: "No",
  });

  const countryOptions: SelectOption[] = [
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "India", label: "India" },
    { value: "Srilanka", label: "Srilanka" },
  ];

  const cityOptions: SelectOption[] = [
    { value: "London", label: "London" },
    { value: "Manchester", label: "Manchester" },
    { value: "Birmingham", label: "Birmingham" },
  ];

  const seatOptions: SelectOption[] = [
    { value: "4 Seats", label: "4 Seats" },
    { value: "6 Seats", label: "6 Seats" },
    { value: "8 Seats", label: "8 Seats" },
    { value: "12 Seats", label: "12 Seats" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-xl font-bold">Create Driver</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Driver Details Section */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-4">Driver Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {countryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {cityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Self Trip Details Section */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-4">Self Trip Details</h2>
          {/* Add self trip details fields here */}
        </div>

        {/* Vehicle Details Section */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-4">Vehicle Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Vehicle Type
              </label>
              <input
                type="text"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                No of Seats
              </label>
              <select
                name="numberOfSeats"
                value={formData.numberOfSeats}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {seatOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Luxury Vehicle
              </label>
              <select
                name="isLuxury"
                value={formData.isLuxury}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <Button type="submit">Create Driver</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateDriver;
