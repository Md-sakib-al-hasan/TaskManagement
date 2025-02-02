"use client"; // Ensure this component runs on the client side

import React, { useState, useEffect } from "react";
import Adminworkeboard from "./Adminworkeboard";
import UserDashboard from "./Userwrokebaord";

const MainPageDashboard = () => {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Ensure this runs only in the browser
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    // Check if the user object contains a role
    if (user && user.role) {
      setUserRole(user.role);
    }
  }, []); // Runs only once after mount

  return (
    <div>
      {userRole === "user" && <UserDashboard />}
      {userRole === "admin" && <Adminworkeboard />}
    </div>
  );
};

export default MainPageDashboard;
