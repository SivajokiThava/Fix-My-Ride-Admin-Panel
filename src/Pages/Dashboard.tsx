import { Fingerprint, Car, DollarSign } from "lucide-react";
import StatCard from "../Components/StatCard";

const Dashboard = () => {
  const stats = [
    {
      icon: <Fingerprint className="w-8 h-8" />,
      value: "123456",
      label: "Total Request",
    },
    {
      icon: <Car className="w-8 h-8" />,
      value: "1234",
      label: "Available Driver",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "4587",
      label: "Completed",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "789654",
      label: "Revenue",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>

      {/* Summary Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
        <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
          {/* Add your summary content here */}
        </div>
      </div>

      {/* Upcoming Request Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Request
        </h2>
        <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
          {/* Add your upcoming request content here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
