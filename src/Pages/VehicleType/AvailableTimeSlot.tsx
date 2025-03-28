import React, { useState } from "react";
import Button from "../../Components/Button";

// Interfaces
interface TimeSlot {
  offPeak: string[];
  peak: string[];
  night: string[];
}

interface Location {
  country: string;
  city: string;
}

interface TimeSlotData {
  type: "offPeak" | "peak" | "night";
  fromHour: string;
  fromPeriod: "am" | "pm";
  toHour: string;
  toPeriod: "am" | "pm";
}

// Modal Component
interface AddTimeSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TimeSlotData) => void;
  location: Location;
}

const AddTimeSlotModal: React.FC<AddTimeSlotModalProps> = ({
  isOpen,
  onClose,
  onSave,
  location,
}) => {
  const [formData, setFormData] = useState<TimeSlotData>({
    type: "offPeak",
    fromHour: "8",
    fromPeriod: "am",
    toHour: "10",
    toPeriod: "am",
  });

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-3xl mx-4">
        <h2 className="text-xl font-bold">Set Time Slot</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={location.country}
                  disabled
                  className="w-full border rounded p-3 bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  value={location.city}
                  disabled
                  className="w-full border rounded p-3 bg-gray-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Time Slot
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value as TimeSlotData["type"],
                    })
                  }
                  className="w-full border rounded p-3"
                >
                  <option value="offPeak">Off-Peakhour</option>
                  <option value="peak">Peakhour</option>
                  <option value="night">Nighttime</option>
                </select>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">From</label>
                  <div className="flex gap-4">
                    <select
                      value={formData.fromHour}
                      onChange={(e) =>
                        setFormData({ ...formData, fromHour: e.target.value })
                      }
                      className="border rounded p-3 flex-1"
                    >
                      {hours.map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      ))}
                    </select>
                    <select
                      value={formData.fromPeriod}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fromPeriod: e.target.value as "am" | "pm",
                        })
                      }
                      className="border rounded p-3 w-24"
                    >
                      <option value="am">am</option>
                      <option value="pm">pm</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">To</label>
                  <div className="flex gap-4">
                    <select
                      value={formData.toHour}
                      onChange={(e) =>
                        setFormData({ ...formData, toHour: e.target.value })
                      }
                      className="border rounded p-3 flex-1"
                    >
                      {hours.map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      ))}
                    </select>
                    <select
                      value={formData.toPeriod}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          toPeriod: e.target.value as "am" | "pm",
                        })
                      }
                      className="border rounded p-3 w-24"
                    >
                      <option value="am">am</option>
                      <option value="pm">pm</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border rounded-lg hover:bg-gray-100 text-lg"
              >
                Cancel
              </button>
              <Button type="submit" className="px-6 py-3">
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Component
const AvailableTimeSlot: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState<Location>({
    country: "United Kingdom",
    city: "London",
  });
  const [timeSlots, setTimeSlots] = useState<TimeSlot>({
    offPeak: ["6am-8am", "10am-6pm", "8pm-10pm"],
    peak: ["8am-10am", "6pm-8pm"],
    night: ["10pm-6am"],
  });

  const countries = ["United Kingdom", "United States", "Canada", "Australia"];
  const cities = {
    "United Kingdom": ["London", "Manchester", "Birmingham"],
    "United States": ["New York", "Los Angeles", "Chicago"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
    Australia: ["Sydney", "Melbourne", "Brisbane"],
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    setLocation({
      country: newCountry,
      city: cities[newCountry as keyof typeof cities][0],
    });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation((prev) => ({
      ...prev,
      city: e.target.value,
    }));
  };

  const handleSaveTimeSlot = (data: TimeSlotData) => {
    const timeString = `${data.fromHour}${data.fromPeriod}-${data.toHour}${data.toPeriod}`;
    setTimeSlots((prev) => ({
      ...prev,
      [data.type]: [...prev[data.type], timeString],
    }));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Set Operation Time</h2>
        <Button onClick={() => setIsModalOpen(true)}>Add New</Button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-xl font-semibold mb-4">Available Time Slot</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <select
              value={location.country}
              onChange={handleCountryChange}
              className="w-full border rounded p-2"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <select
              value={location.city}
              onChange={handleCityChange}
              className="w-full border rounded p-2"
            >
              {cities[location.country as keyof typeof cities].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <Button>Search</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Off-Peakhour</h3>
            <div className="space-y-2">
              {timeSlots.offPeak.map((time) => (
                <div key={time} className="bg-gray-50 p-2 rounded">
                  {time}
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Peakhour</h3>
            <div className="space-y-2">
              {timeSlots.peak.map((time) => (
                <div key={time} className="bg-gray-50 p-2 rounded">
                  {time}
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">NightTime</h3>
            <div className="space-y-2">
              {timeSlots.night.map((time) => (
                <div key={time} className="bg-gray-50 p-2 rounded">
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AddTimeSlotModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTimeSlot}
        location={location}
      />
    </div>
  );
};

export default AvailableTimeSlot;
