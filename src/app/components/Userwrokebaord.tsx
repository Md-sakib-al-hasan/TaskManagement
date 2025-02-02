"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation'
import React from 'react'
const events = [
  {
    title: "Birthday Event",
    description: "Join us for a fun-filled birthday celebration with games, music, and cake!",
    startDate: "2025-02-15",
    endDate: "2025-02-15",
  },
  {
    title: "Tech Conference",
    description: "A gathering of industry leaders discussing the latest in technology.",
    startDate: "2025-03-10",
    endDate: "2025-03-12",
  },
  {
    title: "Music Festival",
    description: "An outdoor festival featuring live bands and food stalls.",
    startDate: "2025-04-20",
    endDate: "2025-04-22",
  },
  {
    title: "Art Exhibition",
    description: "Showcasing local and international artists' latest masterpieces.",
    startDate: "2025-05-05",
    endDate: "2025-05-10",
  },
];

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
  {
    title: "Prepare Presentation Slides",
    startDate: "2024-02-10",
    endDate: "2024-02-15",
    priority: "Medium",
    state: "In Process",
  },
  {
    title: "Update Database Schema",
    startDate: "2024-02-12",
    endDate: "2024-02-18",
    priority: "Low",
    state: "Incomplete",
  },
  {
    title: "Optimize Website Performance",
    startDate: "2024-02-15",
    endDate: "2024-02-20",
    priority: "High",
    state: "Completed",
  },
  {
    title: "Conduct User Testing",
    startDate: "2024-02-17",
    endDate: "2024-02-22",
    priority: "Medium",
    state: "In Process",
  },
  {
    title: "Write Documentation",
    startDate: "2024-02-19",
    endDate: "2024-02-25",
    priority: "Low",
    state: "Incomplete",
  },
  {
    title: "Plan Marketing Campaign",
    startDate: "2024-02-21",
    endDate: "2024-02-27",
    priority: "High",
    state: "Completed",
  },
];



const UserDashboard = () => {
  const router = useRouter()
  

  const handleLogout = async () => {
    try {

      const response = await axios.get("/api/logout");
      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }
  return (
    <div  className="">
       
       <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-center text-gray-900 mb-4">
        Personal Info
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
      {events.map((event, index) => (
        <div onClick={() => router.push(`/dashboard/task/${index}`)} key={index} className="flex cursor-pointer flex-col gap-3 p-4 bg-white rounded-lg shadow-md text-center sm:text-left border">
          <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
          <p className="text-sm text-gray-600">{event.description}</p>
          <div className="text-sm text-gray-500">
            <p><strong>Start:</strong> {event.startDate}</p>
            <p><strong>End:</strong> {event.endDate}</p>
          </div>
        </div>
      ))}
    </div>
      <ul className="space-y-4 ">
        <div className="flex justify-between">
            <h2 className="text-xl font-bold  text-gray-900 mb-4">All Task</h2>
            <button onClick={handleLogout} className="text-md font-bold px-4  bg-gradient-to-r from-[#01ECA9] to-[#3757F8]  animate-shake animate-infinite animate-duration-[10000ms] animate-ease-in   text-white mb-4">Logout</button>
        </div>
        {TaskArray.map((item, index) => (
          <li
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
            <span
              className={`text-white font-semibold px-4 py-1 rounded-md text-sm ${
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
  )
}

export default UserDashboard 




