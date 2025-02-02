"use client";

import Image from "next/image";

const user = {
  name: "Alice Johnson",
  email: "alice@example.com",
  role: "Admin",
  profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  completedTasks: [
    "Design homepage UI",
    "Fix login page bug",
    "Update dashboard layout",
    "Write API documentation",
  ],
  pendingTasks: ["Optimize database queries", "Implement dark mode"],
  joined: "2023-06-15",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, Springfield, USA",
};

const TaskArray = [
  {
    title: "Complete Project Proposal",
    startDate: "2024-02-01",
    endDate: "2024-02-05",
    priority: "High",
    state: "Completed",
  },
  {
    title: "Review Code Submissions",
    startDate: "2024-02-03",
    endDate: "2024-02-07",
    priority: "Medium",
    state: "In Process",
  },
  {
    title: "Design Landing Page",
    startDate: "2024-02-05",
    endDate: "2024-02-10",
    priority: "Low",
    state: "Incomplete",
  },
  {
    title: "Fix API Integration Bug",
    startDate: "2024-02-08",
    endDate: "2024-02-12",
    priority: "High",
    state: "Completed",
  },
];

const UserDetails = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 p-6 sm:p-8 flex flex-col items-center text-white text-center">
          <Image
            src={user.profilePic}
            alt={user.name}
            width={100}
            height={100}
            className="rounded-full border-4 border-white mb-4"
          />
          <h2 className="text-xl sm:text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-200 text-sm sm:text-base">{user.email}</p>
          <span className="mt-2 px-4 py-1 bg-white text-blue-600 font-semibold text-sm rounded-full">
            {user.role}
          </span>
        </div>

        {/* User Details */}
        <div className="p-4 sm:p-6 space-y-3">
          <p className="text-gray-700 text-sm sm:text-base">
            <strong>Joined:</strong> {user.joined}
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            <strong>Address:</strong> {user.address}
          </p>
        </div>

        {/* Task List */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">Tasks</h3>
          <ul className="space-y-2 overflow-x-auto">
            {TaskArray.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:grid sm:grid-cols-5 items-center gap-2 p-4 bg-white rounded-lg shadow-md"
              >
                <span className="font-semibold text-gray-900 text-center sm:text-left">
                  {item.title}
                </span>
                <span className="bg-gray-300 text-gray-800 font-medium px-3 py-1 rounded-md text-xs sm:text-sm text-center">
                  {item.startDate}
                </span>
                <span className="bg-gray-300 text-gray-800 font-medium px-3 py-1 rounded-md text-xs sm:text-sm text-center">
                  {item.endDate}
                </span>
                <span
                  className={`text-white font-semibold px-3 py-1 rounded-md text-xs sm:text-sm text-center ${
                    item.priority === "High"
                      ? "bg-red-600"
                      : item.priority === "Medium"
                      ? "bg-orange-500"
                      : "bg-green-500"
                  }`}
                >
                  {item.priority}
                </span>
                <span
                  className={`text-white font-semibold px-3 py-1 rounded-md text-xs sm:text-sm text-center ${
                    item.state === "Completed"
                      ? "bg-green-600"
                      : item.state === "In Process"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                >
                  {item.state}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
