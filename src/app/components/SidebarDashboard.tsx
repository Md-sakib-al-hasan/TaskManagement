"use client"
import { CgProfile } from "react-icons/cg";
import ProfileMangement from "./ProfileMangement";
import TaskMangement from "./TaskMangement";
import { useState } from "react";




const SidebarDashboard = () => {
     const [isProfileshow,setProfileshow] = useState(false)
  return (
    <div className="p-4 min-h-full relative bg-[#28284E] shadow-[5px_5px_20px_rgba(0,0,0,0.3),-2px_-2px_2px_rgba(255,255,255,0.2)]">
     {
        isProfileshow ? <ProfileMangement setProfileshow={setProfileshow}/> :
        <span onClick={() => setProfileshow(Prev => !Prev)} className="absolute rounded-full right-2 bg-gradient-to-r from-[#01ECA9] to-[#3757F8] "><CgProfile size={30} /></span>
     }
      
      {/* Task mangement */}
      <TaskMangement></TaskMangement>


    </div>
  );
};

export default SidebarDashboard;
