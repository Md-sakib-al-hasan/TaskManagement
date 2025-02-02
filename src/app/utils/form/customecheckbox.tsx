"use client"
import React, { useState } from 'react'
const Customecheckbox = ({isComplted}:{isComplted:boolean}) => {
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const [complted,SetComplted] = useState(isComplted);
  return (
    <div className="flex items-center mt-2 gap-2">
    <div
      className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all
                  ${
                    complted
                      ? "bg-gradient-to-r from-[#01ECA9] to-[#3757F8] "
                      : "border-white"
                  }`}
    >
      {complted && (
        <svg
          className="w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      )}
    </div>
  </div>
  )
}

export default Customecheckbox
