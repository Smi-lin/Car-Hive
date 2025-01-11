import React, { useState, useEffect } from "react";
import {
  MdNotifications,
  MdMessage,
  MdMenu,
  MdPerson,
  MdCalendarToday,
  MdFolder,
  MdEmail,
  MdInventory,
  MdWork,
  MdSettings,
  MdPieChart,
  MdLogout,
} from "react-icons/md";
import lexu from "../../assets/fleet1.png";
import CarownerCreateVehicle from "./CarownerCreateVehicle";

const DashboardHero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeContent, setActiveContent] = useState("dashboard");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { icon: MdPieChart, title: "Dashboard", id: "dashboard" },
    { icon: MdCalendarToday, title: "Create Vehicles", id: "createVehicles" },
    { icon: MdEmail, title: "All Vehicles", id: "allVehicles" },
    { icon: MdPerson, title: "Profile", id: "profile" },
    { icon: MdInventory, title: "History", id: "history" },
    { icon: MdWork, title: "Past Rentals", id: "pastRentals" },
    { icon: MdSettings, title: "Settings", id: "settings" },
  ];

  const renderContent = () => {
    switch (activeContent) {
      case "createVehicles":
        return <CarownerCreateVehicle />;
      case "dashboard":
        return (
          <>
            <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg hover:shadow-xl transition-shadow">
              <h1 className="text-2xl font-semibold mb-2">
                Welcome to Dashboard
              </h1>
              <p className="text-gray-400">
                Hello John Doe, welcome to your awesome dashboard!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-4 rounded-lg">
                    <MdEmail className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold">1,245</h3>
                      <span className="ml-2 text-gray-400">Rentals</span>
                    </div>
                    <p className="text-gray-500">Active Rentals</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center">
                  <div className="bg-red-500 p-4 rounded-lg">
                    <MdFolder className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold">10</h3>
                      <span className="ml-2 text-gray-400">Vehicles</span>
                    </div>
                    <p className="text-gray-500">Total Vehicles</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center">
                  <div className="bg-green-500 p-4 rounded-lg">
                    <MdPerson className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold">$500</h3>
                      <span className="ml-2 text-gray-400">Earned</span>
                    </div>
                    <p className="text-gray-500">Total Earnings</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return <div>Content for {activeContent}</div>;
    }
  };

  const SidebarItem = ({ icon: Icon, title, id }) => {
    const isActive = activeContent === id;

    return (
      <li className="px-4">
        <button
          onClick={() => setActiveContent(id)}
          className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 w-full
            ${
              isActive
                ? "bg-purple-700 text-white"
                : "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
            }`}
        >
          <Icon className="w-5 h-5 mr-3" />
          <span className="font-medium">{title}</span>
          {isActive && (
            <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></div>
          )}
        </button>
      </li>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 w-full">
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center">
            <img
              src={lexu}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-purple-500"
            />
            <div className="ml-3">
              <h5 className="text-lg text-gray-300 font-medium">John Doe</h5>
              <p className="text-sm text-purple-400">Car Owner</p>
            </div>
          </div>
        </div>

        <div className="py-4">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                title={item.title}
                id={item.id}
              />
            ))}
          </ul>

          <div className="px-4 mt-8">
            <hr className="border-gray-700 mb-4" />
            <button className="flex items-center px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors duration-200 w-full">
              <MdLogout className="w-5 h-5 mr-3" />
              <span className="font-medium">Disconnect Wallet</span>
            </button>
          </div>
        </div>
      </aside>

      <div
        className={`${
          sidebarOpen ? "ml-64" : "ml-0"
        } transition-margin duration-300 ease-in-out`}
      >
        <nav className="bg-purple-700 p-4 shadow-lg">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white p-2 hover:bg-purple-600 rounded-lg transition-colors"
            >
              <MdMenu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4">
              <button className="text-white relative hover:bg-purple-600 p-2 rounded-lg transition-colors">
                <MdMessage className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  23
                </span>
              </button>
              <button className="text-white relative hover:bg-purple-600 p-2 rounded-lg transition-colors">
                <MdNotifications className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  98
                </span>
              </button>
              <appkit-button />
            </div>
          </div>
        </nav>

        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default DashboardHero;
