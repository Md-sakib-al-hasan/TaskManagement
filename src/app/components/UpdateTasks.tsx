import { redirect } from "next/navigation";
import React from "react";

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

const UpdateTasks = () => {
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-center text-gray-900 mb-4">
        Task List
      </h2>
      <ul className="space-y-4">
        {TaskArray.map((item, index) => (
          <li onClick={() => redirect(`/dashboard/updatetask/${index}`)}
            key={index}
            className="flex flex-col sm:grid sm:grid-cols-5 items-center gap-2 p-4 bg-white rounded-lg shadow-md text-center sm:text-left"
          >
            <span className="font-semibold text-gray-900">{item.title}</span>
            <span className="bg-gray-300 text-gray-800 font-medium px-4 py-1 rounded-md text-sm">
              {item.startDate}
            </span>
            <span className="bg-gray-300 text-gray-800 font-medium px-4 py-1 rounded-md text-sm">
              {item.endDate}
            </span>
            <span
              className={`text-white font-semibold px-4 py-1 rounded-md text-sm ${
                item.priority === "High"
                  ? "bg-red-600"
                  : item.priority === "Medium"
                  ? "bg-orange-500"
                  : "bg-green-500"
              }`}
            >
              {item.priority}
            </span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md text-sm transition w-full sm:w-auto">
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateTasks;