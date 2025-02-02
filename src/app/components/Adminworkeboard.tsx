"use client";
import React, { useState } from "react";
import CreateTask from "./CreateTask";
import UpdateTasks from "./UpdateTasks";
import MyCreateTask from "./MyCrteateTask";
import AdminUserList from "./AllUser";
import CreateUser from "./CreateUsr";
import { useRouter } from "next/navigation";
import axios from "axios";

const dashboarditemlist = [
  "Create user",
  "Create Task",
  "Update Task",
  "My Create Task",
  "User Management",
  "Logout"
];

const Adminworkeboard = () => {
  const [select, SetSelect] = useState("Create Task");
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
    <div className="min-h-screen  p-4">
      {/* Navigation */}
      <ul className="p-4 rounded-md flex flex-col md:flex-row items-center md:justify-around bg-[#28284E] shadow-lg text-white gap-3">
        {dashboarditemlist.map((item) => (
          <li
            onClick={() => SetSelect(item)}
            className={`text-lg font-semibold relative px-4 py-2 transition-all duration-300 cursor-pointer
              before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[3px] 
              before:bg-white before:transition-all before:duration-300 before:ease-in-out before:rounded-md
              hover:before:w-full hover:before:left-0 hover:scale-105 ${
                select === item ? "text-yellow-400" : "hover:text-white"
              }`}
            key={item}
          >
            { 
            item === "Logout" ? <button onClick={handleLogout} >{item}</button> : item
            }
          </li>
        ))}
      </ul>
      
      {/* Content Sections */}
      <div className="mt-6   shadow-md rounded-lg">
        {select === "Create user" && <CreateUser/>}
        {select === "Create Task" && <CreateTask />}
        {select === "Update Task" && <UpdateTasks />}
        {select === "My Create Task" && <MyCreateTask />}
        {select === "User Management" && <AdminUserList />}
      </div>
    </div>
  );
};

export default Adminworkeboard;
