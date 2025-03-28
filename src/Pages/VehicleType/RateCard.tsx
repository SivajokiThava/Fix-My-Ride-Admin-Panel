import React, { useState } from "react";
import Button from "../../Components/Button";

interface RateCardProps {
  onSearch?: (formData: FormData) => void;
}

interface FormData {
  country: string;
  state: string;
  city: string;
  vehicleType: string;
  baseFareSettings: BaseFareSettings;
}

interface BaseFareSettings {
  vehicleType: string;
  minRate: number;
  ratePerMileMarket: number;
  ratePerMileCap: number;
  ratePerMileControl: number;
  ratePerMileMPAirport: number;
  ratePerMileMCAirport: number;
  longDistanceDiscount: string;
  minimumMiles: number;
  waitingTime: number;
  peakHourCharges: string;
  nightTimeCharges: string;
}

const RateCard: React.FC<RateCardProps> = ({ onSearch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    country: "India",
    state: "Delhi",
    city: "Delhi",
    vehicleType: "4Seater",
    baseFareSettings: {
      vehicleType: "4Seater",
      minRate: 5,
      ratePerMileMarket: 2.5,
      ratePerMileCap: 2.5,
      ratePerMileControl: 2.9,
      ratePerMileMPAirport: 2.5,
      ratePerMileMCAirport: 2.5,
      longDistanceDiscount: "Flat",
      minimumMiles: 5,
      waitingTime: 0,
      peakHourCharges: "BaseFare+40%",
      nightTimeCharges: "BaseFare+50%",
    },
  });

  const handleSearch = () => {
    onSearch?.(formData);
  };

  const handleCreate = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can add logic to save the data
    console.log("Saving data:", formData);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Rate Card</h1>
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block mb-1">Country</label>
          <select
            className="w-full p-2 border rounded"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            disabled={!isEditing}
          >
            <option value="India">India</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">State</label>
          <select
            className="w-full p-2 border rounded"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
            disabled={!isEditing}
          >
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">City</label>
          <select
            className="w-full p-2 border rounded"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            disabled={!isEditing}
          >
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Vehicle Type</label>
          <select
            className="w-full p-2 border rounded"
            value={formData.vehicleType}
            onChange={(e) =>
              setFormData({ ...formData, vehicleType: e.target.value })
            }
          >
            <option value="4Seater">4Seater</option>
          </select>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-white mt-4">
        <h2 className="text-lg font-semibold mb-4">Base Fare Settings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="space-y-4">
            {!isEditing ? (
              <div>
                <label className="block mb-1">Vehicle Type</label>
                <select
                  className="w-full p-2 border rounded"
                  value={formData.baseFareSettings.vehicleType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      baseFareSettings: {
                        ...formData.baseFareSettings,
                        vehicleType: e.target.value,
                      },
                    })
                  }
                  disabled={!isEditing}
                >
                  <option value="4Seater">4Seater</option>
                </select>
              </div>
            ) : (
              <div>
                <label className="block mb-1">Base Fare</label>
                <select
                  className="w-full p-2 border rounded"
                  value={formData.baseFareSettings.vehicleType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      baseFareSettings: {
                        ...formData.baseFareSettings,
                        vehicleType: e.target.value,
                      },
                    })
                  }
                >
                  <option value="4Seater">4Seater Base Fare</option>
                  <option value="6Seater">6Seater Base Fare</option>
                  <option value="SUV">SUV Base Fare</option>
                </select>
              </div>
            )}

            <div>
              <label className="block mb-1">MinRate</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.baseFareSettings.minRate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    baseFareSettings: {
                      ...formData.baseFareSettings,
                      minRate: Number(e.target.value),
                    },
                  })
                }
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block mb-1">RatePerMile(Market Price)</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.baseFareSettings.ratePerMileMarket}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    baseFareSettings: {
                      ...formData.baseFareSettings,
                      ratePerMileMarket: Number(e.target.value),
                    },
                  })
                }
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block mb-1">RatePerMile(Market Cap)</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.baseFareSettings.ratePerMileCap}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    baseFareSettings: {
                      ...formData.baseFareSettings,
                      ratePerMileCap: Number(e.target.value),
                    },
                  })
                }
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block mb-1">RatePerMile(ControlPanel)</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.baseFareSettings.ratePerMileControl}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    baseFareSettings: {
                      ...formData.baseFareSettings,
                      ratePerMileControl: Number(e.target.value),
                    },
                  })
                }
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block mb-1">RatePerMile(MP-Airport)</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.baseFareSettings.ratePerMileMPAirport}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    baseFareSettings: {
                      ...formData.baseFareSettings,
                      ratePerMileMPAirport: Number(e.target.value),
                    },
                  })
                }
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block mb-1">RatePerMile(MC-Airport)</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.baseFareSettings.ratePerMileMCAirport}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    baseFareSettings: {
                      ...formData.baseFareSettings,
                      ratePerMileMCAirport: Number(e.target.value),
                    },
                  })
                }
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block mb-1">Long Distance Discount</label>
              {isEditing ? (
                <select
                  className="w-full p-2 border rounded"
                  value={formData.baseFareSettings.longDistanceDiscount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      baseFareSettings: {
                        ...formData.baseFareSettings,
                        longDistanceDiscount: e.target.value,
                      },
                    })
                  }
                >
                  <option value="Flat">Flat</option>
                  <option value="Percentage">Percentage</option>
                  <option value="None">None</option>
                </select>
              ) : (
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.baseFareSettings.longDistanceDiscount}
                  disabled
                />
              )}
            </div>

            <div>
              <label className="block mb-1">Minimum Miles</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.baseFareSettings.minimumMiles}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    baseFareSettings: {
                      ...formData.baseFareSettings,
                      minimumMiles: Number(e.target.value),
                    },
                  })
                }
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block mb-1">Waiting Time</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={formData.baseFareSettings.waitingTime}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    baseFareSettings: {
                      ...formData.baseFareSettings,
                      waitingTime: Number(e.target.value),
                    },
                  })
                }
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block mb-1">PeakHourCharges</label>
              {isEditing ? (
                <select
                  className="w-full p-2 border rounded"
                  value={formData.baseFareSettings.peakHourCharges}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      baseFareSettings: {
                        ...formData.baseFareSettings,
                        peakHourCharges: e.target.value,
                      },
                    })
                  }
                >
                  <option value="BaseFare+40%">BaseFare+40%</option>
                  <option value="BaseFare+30%">BaseFare+30%</option>
                  <option value="BaseFare+20%">BaseFare+20%</option>
                  <option value="None">None</option>
                </select>
              ) : (
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.baseFareSettings.peakHourCharges}
                  disabled
                />
              )}
            </div>

            <div>
              <label className="block mb-1">NightTimeCharges</label>
              {isEditing ? (
                <select
                  className="w-full p-2 border rounded"
                  value={formData.baseFareSettings.nightTimeCharges}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      baseFareSettings: {
                        ...formData.baseFareSettings,
                        nightTimeCharges: e.target.value,
                      },
                    })
                  }
                >
                  <option value="BaseFare+50%">BaseFare+50%</option>
                  <option value="BaseFare+40%">BaseFare+40%</option>
                  <option value="BaseFare+30%">BaseFare+30%</option>
                  <option value="None">None</option>
                </select>
              ) : (
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.baseFareSettings.nightTimeCharges}
                  disabled
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleCreate}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create
          </button>
        )}
      </div>
    </div>
  );
};

export default RateCard;
