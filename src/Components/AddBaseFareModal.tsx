import { X } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";

interface AddBaseFareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (rateData: RateData) => void;
}

interface RateData {
  name: string;
  minrate: number;
  ratePerMileMP: number;
  ratePerMileMC: number;
  ratePerMileCP: number;
  ratePerMileAPMP: number;
  ratePerMileAPMC: number;
}

const AddBaseFareModal: React.FC<AddBaseFareModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [selectedCountry, setSelectedCountry] =
    useState<string>("United Kingdom");
  const [selectedState, setSelectedState] = useState<string>("London");
  const [selectedCity, setSelectedCity] = useState<string>("London");
  const [rateData, setRateData] = useState<RateData>({
    name: "",
    minrate: 0,
    ratePerMileMP: 0,
    ratePerMileMC: 0,
    ratePerMileCP: 0,
    ratePerMileAPMP: 0,
    ratePerMileAPMC: 0,
  });

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(rateData);
    onClose();
  };

  const handleInputChange = (field: keyof RateData, value: string) => {
    setRateData((prev) => ({
      ...prev,
      [field]: field === "name" ? value : parseFloat(value) || 0,
    }));
  };

  return (
    <div className="bg-white rounded-lg p-6 w-[800px] relative">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-vlack hover:text-black"
      >
        <X size={24} />
      </button>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-[800px]">
          <h2 className="text-xl font-bold mb-4">Add Base Fare Master</h2>

          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Basefare Master</h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block mb-1">Country</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full border rounded px-2 py-1"
                >
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full border rounded px-2 py-1"
                >
                  <option value="London">London</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full border rounded px-2 py-1"
                >
                  <option value="London">London</option>
                </select>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-4">Rate</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    value={rateData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="block mb-1">RatePer Mile(AP-MP)</label>
                  <input
                    type="number"
                    value={rateData.ratePerMileAPMP}
                    onChange={(e) =>
                      handleInputChange("ratePerMileAPMP", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="block mb-1">Minrate</label>
                  <input
                    type="number"
                    value={rateData.minrate}
                    onChange={(e) =>
                      handleInputChange("minrate", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="block mb-1">RatePer Mile(AP-MC)</label>
                  <input
                    type="number"
                    value={rateData.ratePerMileAPMC}
                    onChange={(e) =>
                      handleInputChange("ratePerMileAPMC", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="block mb-1">RatePer Mile(MP)</label>
                  <input
                    type="number"
                    value={rateData.ratePerMileMP}
                    onChange={(e) =>
                      handleInputChange("ratePerMileMP", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="block mb-1">RatePer Mile(MC)</label>
                  <input
                    type="number"
                    value={rateData.ratePerMileMC}
                    onChange={(e) =>
                      handleInputChange("ratePerMileMC", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="block mb-1">RatePer Mile(CP)</label>
                  <input
                    type="number"
                    value={rateData.ratePerMileCP}
                    onChange={(e) =>
                      handleInputChange("ratePerMileCP", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Button onClick={handleSave}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBaseFareModal;
