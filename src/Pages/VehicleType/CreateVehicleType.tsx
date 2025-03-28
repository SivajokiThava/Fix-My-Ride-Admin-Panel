import React, { useState } from "react";
import Button from "../../Components/Button";

const CreateVehicleType: React.FC = () => {
  const [vehicleTypeName, setVehicleTypeName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Vehicle Type:", vehicleTypeName);
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-xl font-bold">Create Vehicle Type</h1>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Vehicle Type</h2>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <label htmlFor="vehicleType" className="text-gray-700 md:w-32">
                  Vehicle Type
                </label>
                <input
                  type="text"
                  id="vehicleType"
                  placeholder="Vehicle Type Name"
                  value={vehicleTypeName}
                  onChange={(e) => setVehicleTypeName(e.target.value)}
                  className="flex-1 max-w-md border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mt-6 flex justify-center">
                <Button type="submit">Create</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVehicleType;
