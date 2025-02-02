
import Image from 'next/image'
import React from 'react'
import sakibimge from "@/public/sakib.png"
import { redirect } from 'next/navigation'

import { FaChevronDown } from 'react-icons/fa'
import { LiaEdit } from 'react-icons/lia'
const ProfileMangement = ({setProfileshow}:{setProfileshow:(isProfileshow:boolean) => void}) => {
  return (
    <div className="space-y-3">
          <span onClick={()=> redirect('/dashboard/editeProfile')}  className="absolute   top-2  bg-neutral "><LiaEdit size={25}/></span>
          <span onClick={()=>setProfileshow(false)} className="absolute animate-duration-[1800ms] animate-delay-1000  animate-fade-up top-0  right-2 bg-neutral "><FaChevronDown size={20} /></span>
        {/* avater  */}
            <div className="relative w-[140px] h-[140px] mx-auto top-3 mb-8 ">
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#01ECA9] to-[#3757F8] p-[5px]">
                <div className="w-full h-full bg-[#28284E] rounded-full flex items-center justify-center">
                <Image
                    src={sakibimge}
                    className="rounded-full object-cover w-[110px] h-[110px]"
                    alt="This is Profile pic"
                />
                </div>
            </div>
            </div>
        {/* personal info  */}
            <ul className="text-center space-y-2">
               <li className="text-2xl font-semibold">Md sakib al hasan</li>
               <li className="text-lg font-semibold">WEBB-2247</li>
               <li className="text-md">mdsakibalhasan@gmail.com</li>
               <li className="text-md">01625457343</li>

            </ul>
        {/* progressbar */}
            <div className="relative w-full h-2 bg-white rounded-full">
            <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#5af3c8] to-[#405dee] transition-all duration-500"
                style={{ width: `${80}%` }}
            ></div>
            </div>
            <div className="flex justify-between">
            <h4 className="text-sm ">Complete your task</h4>
             <span>80%</span>
            </div> 
            <hr className="red border-dashed  opacity-30" />      
      </div>
  )
}

export default ProfileMangement
