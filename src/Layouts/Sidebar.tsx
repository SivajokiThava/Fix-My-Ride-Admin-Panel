import { useState, ReactNode } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  MapPin,
  LogOut,
  ChevronRight,
  Menu,
  X,
  ClipboardList,
  FileBarChart,
  ChevronDown,
  UserPlus,
  UsersRound,
} from "lucide-react";

interface MenuItem {
  path?: string;
  icon: ReactNode;
  label: string;
  isGroupHeader?: boolean;
  subItems?: MenuItem[];
}

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const menuItems: MenuItem[] = [
    {
      path: "",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
    },
    {
      path: "/jobs",
      icon: <ClipboardList size={20} />,
      label: "Jobs",
    },
    {
      label: "Users",
      icon: <Users size={20} />,
      isGroupHeader: true,
      subItems: [
        {
          path: "/users/drivers",
          icon: <UsersRound size={20} />,
          label: "Drivers",
        },
        {
          path: "/users/operators",
          icon: <UserPlus size={20} />,
          label: "Operators",
        },
      ],
    },
    {
      label: "Price Matrix",
      icon: <Users size={20} />,
      isGroupHeader: true,
      subItems: [
        {
          path: "/price/distance",
          icon: <UsersRound size={20} />,
          label: "Distance",
        },
        {
          path: "/price/geofence",
          icon: <UserPlus size={20} />,
          label: "Geofence",
        },
        {
          path: "/price/peak hours",
          icon: <UserPlus size={20} />,
          label: "Peak Hours",
        },
      ],
    },
    {
      path: "/locations",
      icon: <MapPin size={20} />,
      label: "Locations",
    },
    {
      label: "Available Vehicles",
      icon: <Users size={20} />,
      isGroupHeader: true,
      subItems: [
        {
          path: "/vehicleType/vehicletypes",
          icon: <UsersRound size={20} />,
          label: "Available Vehicle Types",
        },
        {
          path: "/vehicleType/createtype",
          icon: <UserPlus size={20} />,
          label: "Create Vehicle Type",
        },
        {
          path: "/vehicleType/typesbycountry",
          icon: <UserPlus size={20} />,
          label: "Available Vehcile Types by Country",
        },
        {
          path: "/vehicleType/createtype",
          icon: <UserPlus size={20} />,
          label: "Create Vehicle Type",
        },
        {
          path: "/vehicleType/createdriver",
          icon: <UserPlus size={20} />,
          label: "Create Driver",
        },
        {
          path: "/vehicleType/timeslot",
          icon: <UserPlus size={20} />,
          label: "Available Time Slot",
        },
        {
          path: "/vehicleType/ratecard",
          icon: <UserPlus size={20} />,
          label: "Rate",
        },
        {
          path: "/vehicleType/basefare",
          icon: <UserPlus size={20} />,
          label: "Base Fare",
        },
        {
          path: "/vehicleType/nighttimecharges",
          icon: <UserPlus size={20} />,
          label: "Night Time Charges",
        },
        {
          path: "/vehicleType/peaktime",
          icon: <UserPlus size={20} />,
          label: "Peak Time Charges",
        },
        {
          path: "/vehicleType/driverdoc",
          icon: <UserPlus size={20} />,
          label: "Driver Documents",
        },
        {
          path: "/vehicleType/insuaranceprovider",
          icon: <UserPlus size={20} />,
          label: "Insuarance Provider",
        },
      ],
    },
    {
      path: "/reports",
      icon: <FileBarChart size={20} />,
      label: "Reports",
    },
  ];

  const toggleSubmenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const NavLinks = () => (
    <>
      {menuItems.map((item, index) => {
        if (item.isGroupHeader) {
          const isOpen = openMenus.includes(item.label);
          const isActiveGroup = item.subItems?.some(
            (subItem) => location.pathname === subItem.path
          );

          return (
            <div key={index}>
              <button
                onClick={() => toggleSubmenu(item.label)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-[#1e40af] transition-colors duration-200 font-medium ${
                  isActiveGroup ? "bg-[#1e40af] text-white font-semibold" : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                <ChevronDown
                  size={16}
                  className={`ml-auto transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && item.subItems && (
                <div className="bg-[#151b59]">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path || ""}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-8 py-3 text-white hover:bg-[#1e40af] transition-colors duration-200 font-medium ${
                        location.pathname === subItem.path
                          ? "bg-[#1e40af] text-white font-semibold"
                          : ""
                      }`}
                    >
                      {subItem.icon}
                      <span>{subItem.label}</span>
                      {location.pathname === subItem.path && (
                        <ChevronRight size={16} className="ml-auto" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.path || index}
            to={item.path || ""}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center space-x-3 px-4 py-3 text-white hover:bg-[#1e40af] transition-colors duration-200 font-medium ${
              location.pathname === item.path
                ? "bg-[#1e40af] text-white font-semibold"
                : ""
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
            {location.pathname === item.path && (
              <ChevronRight size={16} className="ml-auto" />
            )}
          </Link>
        );
      })}
    </>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static w-64 flex flex-col h-screen bg-[#1a237e] shadow-lg transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4 border-b border-opacity-20 border-gray-600">
          <h2 className="text-xl font-bold text-white">Admin Portal</h2>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <NavLinks />
        </nav>

        <div className="p-4 border-t border-opacity-20 border-gray-600 bg-[#1a237e]">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 text-gray-300 hover:text-white w-full"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="flex-1 md:overflow-auto p-4 md:p-8 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
