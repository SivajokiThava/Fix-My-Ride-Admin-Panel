import React, { useState } from "react";
import DriverDocumentModal from "../../Components/DriverDocumentModal";
import Button from "../../Components/Button";

interface DriverDocument {
  id: number;
  documentName: string;
  country: string;
  state: string;
  city: string;
  isFor: string;
  isMandate: string;
}

interface LocationOption {
  label: string;
  value: string;
}

interface DocumentRow {
  documentName: string;
  documentType: string;
}

const DriverDocuments: React.FC = () => {
  const [selectedCountry, setSelectedCountry] =
    useState<string>("United Kingdom");
  const [selectedState, setSelectedState] = useState<string>("London");
  const [selectedCity, setSelectedCity] = useState<string>("London");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documents, setDocuments] = useState<DriverDocument[]>([
    {
      id: 1,
      documentName: "Insurance",
      country: "UnitedKingdom",
      state: "London",
      city: "London",
      isFor: "Vehicle",
      isMandate: "Yes",
    },
    {
      id: 2,
      documentName: "Vehicle Registration",
      country: "UnitedKingdom",
      state: "London",
      city: "London",
      isFor: "Vehicle",
      isMandate: "Yes",
    },
    {
      id: 3,
      documentName: "MOT",
      country: "UnitedKingdom",
      state: "London",
      city: "London",
      isFor: "Vehicle",
      isMandate: "No",
    },
    {
      id: 4,
      documentName: "DVLA License",
      country: "UnitedKingdom",
      state: "London",
      city: "London",
      isFor: "Driver",
      isMandate: "Yes",
    },
  ]);

  const countries: LocationOption[] = [
    { label: "United Kingdom", value: "UnitedKingdom" },
  ];

  const states: LocationOption[] = [{ label: "London", value: "London" }];

  const cities: LocationOption[] = [{ label: "London", value: "London" }];

  const handleSearch = () => {
    console.log("Searching...", {
      selectedCountry,
      selectedState,
      selectedCity,
    });
  };

  const handleSaveDocuments = (newDocuments: DocumentRow[]) => {
    const convertedDocuments: DriverDocument[] = newDocuments.map(
      (doc, index) => ({
        id: documents.length + index + 1,
        documentName: doc.documentName,
        country: selectedCountry,
        state: selectedState,
        city: selectedCity,
        isFor: "Driver", // Default value since `DocumentRow` does not have `isFor`
        isMandate: "Yes", // Default value since `DocumentRow` does not have `isMandate`
      })
    );

    setDocuments([...documents, ...convertedDocuments]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold mb-6">Driver Document Elements</h1>
        <Button onClick={() => setIsModalOpen(true)}>Add New</Button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Driver Documents</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col">
            <label className="mb-1">Country</label>
            <select
              className="border rounded p-2"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1">State</label>
            <select
              className="border rounded p-2"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1">City</label>
            <div className="flex gap-2">
              <select
                className="border rounded p-2 flex-grow"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </select>
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 text-left border">Sl.No</th>
                <th className="py-2 px-4 text-left border">Document Name</th>
                <th className="py-2 px-4 text-left border">Country</th>
                <th className="py-2 px-4 text-left border">State</th>
                <th className="py-2 px-4 text-left border">City</th>
                <th className="py-2 px-4 text-left border">Is For</th>
                <th className="py-2 px-4 text-left border">Is Mandate</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border">{doc.id}</td>
                  <td className="py-2 px-4 border">{doc.documentName}</td>
                  <td className="py-2 px-4 border">{doc.country}</td>
                  <td className="py-2 px-4 border">{doc.state}</td>
                  <td className="py-2 px-4 border">{doc.city}</td>
                  <td className="py-2 px-4 border">{doc.isFor}</td>
                  <td className="py-2 px-4 border">{doc.isMandate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DriverDocumentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveDocuments}
      />
    </div>
  );
};

export default DriverDocuments;
