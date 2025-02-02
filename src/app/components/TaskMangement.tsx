 "use client"
import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5';
import Customecheckbox from '../utils/form/customecheckbox';
import OpenButton from '../utils/OpenButton';
import AcceptButton from '../utils/AcceptButton';
import RejectButton from '../utils/RejectButton';
import { redirect, useRouter } from 'next/navigation'





const TaskCategoryArray = ["Completed","newtask", "Accepted", "Rejected",];
const CompletedArray = [
  { title: "Prepare Monthly Sales Report", isCompleted: true },
  { title: "Organize Annual Meeting", isCompleted: true },
  { title: "Birthday Event Management", isCompleted: true },
  { title: "Annual Conference Planning", isCompleted: true },
  { title: "Team Building Workshop", isCompleted: true },
  { title: "Prepare Monthly Sales Report", isCompleted: true },
  { title: "Organize Annual Meeting", isCompleted: true },
  { title: "Birthday Event Management", isCompleted: true },
  { title: "Annual Conference Planning", isCompleted: true },
  { title: "Team Building Workshop", isCompleted: true },
  { title: "Prepare Monthly Sales Report", isCompleted: true },
  { title: "Organize Annual Meeting", isCompleted: true },
];

  
  const NewTaskArray = [
    "Product Launch Event",
    "Charity Gala Dinner",
    "Summer Festival Coordination",
  ];
  
  const AcceptedArray = [
    "Corporate Retreat Organization",
    "New Year's Eve Party",
    "Wedding Reception Planning",
  ];
  
  const RejectedArray = [
    "Music Concert Setup",
    "Art Exhibition Coordination",
    "Food Truck Festival Arrangement",
  ];
  


const TaskMangement = () => {
    const router = useRouter();
    const [selected, setSelected] = useState<string >("Completed");
  return (
    <div className="space-y-4 mt-2">
    <h6 className="font-semibold space-x-4 "> <span>Your all Task</span> <button onClick={() => router.push('/dashboard')}  >Dashboard</button> </h6>
    <div className="relative w-full max-w-sm">
          <span className="absolute left-5  top-1/2 transform -translate-y-1/2  text-gray-300 "><IoSearchOutline  size={20} /></span>
          <input
              type="text"
              placeholder="Search..."
              className="w-4/5 pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
    </div>
    {/* divide task cagetory  */}
    <ul className="flex justify-evenly space-x-2  flex-wrap ">
      {TaskCategoryArray.map((item) => (
          <li
          key={item}
          onClick={() => setSelected(item)}
          className={`cursor-pointer  py-2 ${
              selected === item ? "border-b-2 border-white font-bold " : "text-white"
          }`}
          >
          {item}
          </li>
      ))}
    </ul>
    {/* all task  */}
    <div>
      {
          selected === "Completed" && <ul className="space-y-3"> 
             {
               CompletedArray.map((item,index) => <li  onClick={()=>redirect(`/dashboard/task/completed/${index}`) } key={index} className="flex justify-between cursor-pointer"><span>{item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}</span>   <Customecheckbox isComplted={item.isCompleted}/> </li>)
             }
           </ul> 
      }
      {
          selected === "Accepted" && <ul className="space-y-3"> 
              {
                  AcceptedArray.map((item,index) => <li onClick={()=>redirect(`/dashboard/task/accepted/${index}`) } key={index} className="flex justify-between cursor-pointer"> <span>{item.length > 30 ? item.slice(0, 30) + "..." : item}</span>  <OpenButton/>   </li>)
              }
          </ul> 
      }
      {
          selected === "Rejected" && <ul className="space-y-3"> 
              {
                  RejectedArray.map((item,index) => <li onClick={()=>redirect(`/dashboard/task/rejected/${index}`) } key={index} className="flex justify-between cursor-pointer"> <span>{item.length > 35 ? item.slice(0, 35) + "..." : item}</span>   </li>)
              }
          </ul> 
      }
      {
          selected === "newtask" && <ul className="space-y-3">
              {
                  NewTaskArray.map((item,index) => <li  key={index} className="flex justify-between cursor-pointer">  <span onClick={()=>redirect(`/dashboard/task/newtask/${index}`) }>{item.length > 20 ? item.slice(0, 20) + "..." : item}</span>  <span><AcceptButton></AcceptButton> <RejectButton></RejectButton></span>  </li>)
              }
          </ul> 
      }
     
    </div>

</div>
  )
}

export default TaskMangement
