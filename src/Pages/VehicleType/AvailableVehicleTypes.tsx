import React, { useState } from "react";
import Button from "../../Components/Button";
import AddVehicleModal from "../../Components/AddVehicleModal";

const AvailableVehicleTypes: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [vehicleTypes, setVehicleTypes] = useState([
    {
      type: "4 Seater",
      maxPassengers: 4,
      maxBigSuitcase: 2,
      maxBaggage: 3,
      maxHandBaggage: 2,
    },
    {
      type: "6 Seater",
      maxPassengers: 6,
      maxBigSuitcase: 3,
      maxBaggage: 3,
      maxHandBaggage: 3,
    },
    {
      type: "8 Seater",
      maxPassengers: 8,
      maxBigSuitcase: 3,
      maxBaggage: 3,
      maxHandBaggage: 4,
    },
    {
      type: "Mini Bus",
      maxPassengers: 12,
      maxBigSuitcase: 4,
      maxBaggage: 6,
      maxHandBaggage: 4,
    },
    {
      type: "Two Wheeler",
      maxPassengers: 1,
      maxBigSuitcase: 0,
      maxBaggage: 0,
      maxHandBaggage: 1,
    },
    {
      type: "Tuk Tuk (Auto)",
      maxPassengers: 3,
      maxBigSuitcase: 1,
      maxBaggage: 1,
      maxHandBaggage: 2,
    },
    {
      type: "Bus",
      maxPassengers: 40,
      maxBigSuitcase: 10,
      maxBaggage: 20,
      maxHandBaggage: 40,
    },
  ]);

  const handleAddVehicle = (newVehicle: any) => {
    setVehicleTypes([
      ...vehicleTypes,
      {
        type: newVehicle.vehicleType,
        maxPassengers: newVehicle.maxPassengers,
        maxBigSuitcase: newVehicle.maxBigSuitcase,
        maxBaggage: newVehicle.maxBaggage,
        maxHandBaggage: newVehicle.maxHandBaggage,
      },
    ]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Available Vehicle Types</h2>
        <Button onClick={() => setIsModalOpen(true)}>Add New</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Vehicle Type</th>
              <th className="border p-2">Max Passengers</th>
              <th className="border p-2">Max Big Suitcase</th>
              <th className="border p-2">Max Baggage</th>
              <th className="border p-2">Max Hand-Baggage</th>
            </tr>
          </thead>
          <tbody>
            {vehicleTypes.map((vehicle, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border p-2">{vehicle.type}</td>
                <td className="border p-2 text-center">
                  {vehicle.maxPassengers}
                </td>
                <td className="border p-2 text-center">
                  {vehicle.maxBigSuitcase}
                </td>
                <td className="border p-2 text-center">{vehicle.maxBaggage}</td>
                <td className="border p-2 text-center">
                  {vehicle.maxHandBaggage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddVehicleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddVehicle}
      />
    </div>
  );
};

export default AvailableVehicleTypes;
