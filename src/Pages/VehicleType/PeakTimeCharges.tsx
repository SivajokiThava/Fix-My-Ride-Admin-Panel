import React from "react";
import { useState } from "react";
import AddChargeModal from "../../Components/AddChargeModal";
import Button from "../../Components/Button";

export interface ChargeFormData {
  name: string;
  country: string;
  state: string;
  city: string;
  chargeType: "Flat" | "Percentage";
  value: string;
  increaseDecrease: "Increase" | "Decrease";
  baseFare: string;
}

interface ChargeRate {
  id: number;
  name: string;
  country: string;
  state: string;
  city: string;
  status: "Active" | "Inactive";
}

interface LocationData {
  countries: string[];
  states: { [country: string]: string[] };
  cities: { [state: string]: string[] };
}

const PeakTimeCharges: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNew = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (data: ChargeFormData) => {
    console.log("New charge data:", data);
  };

  const locationData: LocationData = {
    countries: ["United Kingdom"],
    states: {
      "United Kingdom": ["London"],
    },
    cities: {
      London: ["London"],
    },
  };

  const initialRates: ChargeRate[] = [
    {
      id: 1,
      name: "Basefare+40%",
      country: "UnitedKingdom",
      state: "London",
      city: "London",
      status: "Active",
    },
    {
      id: 1,
      name: "Basefare+50%",
      country: "UnitedKingdom",
      state: "London",
      city: "London",
      status: "Active",
    },
    {
      id: 1,
      name: "Basefare+5Flat",
      country: "UnitedKingdom",
      state: "London",
      city: "London",
      status: "Inactive",
    },
    {
      id: 1,
      name: "Basefare+10%",
      country: "UnitedKingdom",
      state: "London",
      city: "London",
      status: "Active",
    },
  ];

  const [selectedCountry, setSelectedCountry] =
    useState<string>("United Kingdom");
  const [selectedState, setSelectedState] = useState<string>("London");
  const [selectedCity, setSelectedCity] = useState<string>("London");
  const [rates] = useState<ChargeRate[]>(initialRates);

  const handleSearch = () => {
    console.log("Searching with:", {
      selectedCountry,
      selectedState,
      selectedCity,
    });
  };

  return (
    <div className="p-4 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Peak Time Charges</h1>
        <Button onClick={handleAddNew}>Add New</Button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Peak Time Charges</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {locationData.countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {locationData.states[selectedCountry]?.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {locationData.cities[selectedState]?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Id</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Country</th>
                <th className="px-4 py-2 text-left">State</th>
                <th className="px-4 py-2 text-left">City</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((rate, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{rate.id}</td>
                  <td className="px-4 py-2">{rate.name}</td>
                  <td className="px-4 py-2">{rate.country}</td>
                  <td className="px-4 py-2">{rate.state}</td>
                  <td className="px-4 py-2">{rate.city}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        rate.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {rate.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddChargeModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default PeakTimeCharges;
