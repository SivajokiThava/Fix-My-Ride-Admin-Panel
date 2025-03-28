import React, { useState } from "react";
import AddBaseFareModal from "../../Components/AddBaseFareModal";
import Button from "../../Components/Button";

interface Rate {
  name: string;
  minrate: number;
  ratePerMileMP: number;
  ratePerMileMC: number;
  ratePerMileCP: number;
  ratePerMileAPMP: number;
  ratePerMileAPMC: number;
}

interface BaseFareProps {}

const BaseFare: React.FC<BaseFareProps> = () => {
  const [selectedCountry, setSelectedCountry] =
    useState<string>("United Kingdom");
  const [selectedState, setSelectedState] = useState<string>("London");
  const [selectedCity, setSelectedCity] = useState<string>("London");

  const initialRates: Rate[] = [
    {
      name: "Basefare1",
      minrate: 5,
      ratePerMileMP: 2.6,
      ratePerMileMC: 2.6,
      ratePerMileCP: 2.6,
      ratePerMileAPMP: 2.01,
      ratePerMileAPMC: 2.01,
    },
    {
      name: "Basefare1",
      minrate: 5,
      ratePerMileMP: 2.6,
      ratePerMileMC: 2.6,
      ratePerMileCP: 2.6,
      ratePerMileAPMP: 2.01,
      ratePerMileAPMC: 2.01,
    },
    {
      name: "Basefare1",
      minrate: 5,
      ratePerMileMP: 2.6,
      ratePerMileMC: 2.6,
      ratePerMileCP: 2.6,
      ratePerMileAPMP: 2.01,
      ratePerMileAPMC: 2.01,
    },
    {
      name: "Basefare1",
      minrate: 5,
      ratePerMileMP: 2.6,
      ratePerMileMC: 2.6,
      ratePerMileCP: 2.6,
      ratePerMileAPMP: 2.01,
      ratePerMileAPMC: 2.01,
    },
  ];

  const [rates, setRates] = useState<Rate[]>(initialRates);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNew = () => {
    setIsModalOpen(true);
  };

  const handleSaveRate = (newRate: Rate) => {
    setRates((prev) => [...prev, newRate]);
  };

  const handleSearch = () => {
    console.log("Searching...");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Basefare</h1>
        <Button onClick={handleAddNew}>Add New</Button>
      </div>

      <div className="border rounded-lg p-4 mb-4">
        <h2 className="text-lg font-semibold mb-4">Basefare Master</h2>
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block mb-1">Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block mb-1">State</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              <option value="London">London</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block mb-1">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              <option value="London">London</option>
            </select>
          </div>
          <Button onClick={handleSearch} className="px-4 py-2 self-end">
            Search
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Minrate</th>
                <th className="border px-4 py-2 text-left">RatePer Mile(MP)</th>
                <th className="border px-4 py-2 text-left">RatePer Mile(MC)</th>
                <th className="border px-4 py-2 text-left">RatePer Mile(CP)</th>
                <th className="border px-4 py-2 text-left">
                  RatePer Mile(AP-MP)
                </th>
                <th className="border px-4 py-2 text-left">
                  RatePer Mile(AP-MC)
                </th>
              </tr>
            </thead>
            <tbody>
              {rates.map((rate, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{rate.name}</td>
                  <td className="border px-4 py-2">{rate.minrate}</td>
                  <td className="border px-4 py-2">{rate.ratePerMileMP}</td>
                  <td className="border px-4 py-2">{rate.ratePerMileMC}</td>
                  <td className="border px-4 py-2">{rate.ratePerMileCP}</td>
                  <td className="border px-4 py-2">{rate.ratePerMileAPMP}</td>
                  <td className="border px-4 py-2">{rate.ratePerMileAPMC}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddBaseFareModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveRate}
      />
    </div>
  );
};

export default BaseFare;
