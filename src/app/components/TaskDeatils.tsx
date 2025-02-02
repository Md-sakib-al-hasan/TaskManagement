import Image from 'next/image'
import React from 'react'
import bannerimage from '@/public/metting image.jpg'
import SubmiteTaskCompltedData from './submiteTaskcompltedData'

const TaskDeatils = () => {
  return (
    <div className="relative w-full mx-auto">
      {/* Banner Image */}
      <Image
        src={bannerimage}
        alt="Banner"
        className="w-full h-96 object-cover rounded-lg"
      />

      {/* Overlay Div */}
       <div className='p-4 mt-10 rounded-md relative bg-[#28284E] shadow-[5px_5px_20px_rgba(0,0,0,0.3),-2px_-2px_2px_rgba(255,255,255,0.2)]'>
              <div className='flex justify-between items-center font-semibold'>
                <span >Priority:High</span>
                <span>
                <p>Start: 01 Jan 2024</p>
                <p>End: 31 Dec 2024</p>
                </span>
              </div>
              <div className="mt-4 py-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold ">Description</h3>
        <p className=" mt-2 text-justify">
        As we approach the end of the year, it is essential to analyze the salary trends and compensation structures within our organization. This analysis will help us understand the financial impact of our salary policies, identify areas for improvement, and ensure we remain competitive in attracting and retaining top talent.

           Our focus will be on evaluating salary distributions across various departments, analyzing increments and bonuses, and comparing our salary structure with industry standards. We will also assess whether performance-based incentives have effectively motivated employees and contributed to overall productivity.

           Additionally, we need to consider external economic factors, inflation rates, and market salary benchmarks to ensure our pay scales remain fair and sustainable. The data collected will allow us to make informed decisions for the next financial year, balancing employee satisfaction with the companys financial health.

              Please provide a detailed breakdown of salary expenditures, highlight any disparities or inconsistencies, and suggest potential adjustments to optimize our compensation strategy. Your insights will be crucial in shaping our approach for the coming year.
        </p>
      </div>
       </div>

       <SubmiteTaskCompltedData/>
       <button>
        Save
       </button>
     
    </div>
  )
}

export default TaskDeatils
