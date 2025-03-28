import React, { useState } from "react";
import CreateProviderModal from "../../Components/CreateProviderModal";
import Button from "../../Components/Button";

interface InsuranceProvider {
  providerName: string;
  address1: string;
  address2: string;
  country: string;
}

interface SearchCriteria {
  country: string;
  city: string;
}

const InsuranceProvider: React.FC = () => {
  const [providers] = useState<InsuranceProvider[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    country: "United Kingdom",
    city: "London",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSave = (provider: InsuranceProvider) => {
    console.log(provider);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Insurance Provider List</h1>
        <Button onClick={() => setIsModalOpen(true)}>Add New</Button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium mb-4">Insurance Provider List</h2>

        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchCriteria.country}
                onChange={(e) =>
                  setSearchCriteria({
                    ...searchCriteria,
                    country: e.target.value,
                  })
                }
              >
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchCriteria.city}
                onChange={(e) =>
                  setSearchCriteria({
                    ...searchCriteria,
                    city: e.target.value,
                  })
                }
              >
                <option value="London">London</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button type="submit">Search</Button>
            </div>
          </div>
        </form>

        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Provider Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address1
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address2
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Country
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {providers.map((provider, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {provider.providerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {provider.address1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {provider.address2}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {provider.country}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CreateProviderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default InsuranceProvider;
