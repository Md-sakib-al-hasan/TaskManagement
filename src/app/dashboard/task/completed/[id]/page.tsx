"use client"
import { useRouter } from 'next/navigation'
import React, { use } from 'react'
import Image from 'next/image'
import bannerimage from '@/public/metting image.jpg'
const SingleTask =  ({params}: {params: Promise<{ id: string }>}) => {
    const router = useRouter()
    
    const { id } = use(params)
  
    const handleAccept = () => {
      router.push('/dashboard') 
    }
  
  return (
    <div>
      <p>Single Task {id}</p>
      <div className="relative w-full mx-auto">
        {/* Banner Image */}
        <Image
          src={bannerimage}
          alt="Banner"
          className="w-full h-96 object-cover rounded-lg"
        />

        {/* Overlay Div */}
        <div className="p-4 mt-10 rounded-md relative bg-[#28284E] shadow-[5px_5px_20px_rgba(0,0,0,0.3),-2px_-2px_2px_rgba(255,255,255,0.2)]">
          <div className="flex justify-between items-center font-semibold">
            <span>Priority: High</span>
            <span>
              <p>Start: 01 Jan 2024</p>
              <p>End: 31 Dec 2024</p>
            </span>
          </div>
          <div className="mt-4 py-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="mt-2 text-justify">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et exercitationem a earum commodi, facilis iure quos dignissimos quas provident molestiae modi dolores esse repellat quae! Nostrum cupiditate laudantium odit eaque deleniti at et, debitis totam eveniet enim quae assumenda voluptatibus quas maxime quasi sit possimus culpa eligendi recusandae! Est ullam odio vel harum libero minima officiis ipsam velit? Sequi, omnis! Tenetur, itaque sequi? Dolorem sit mollitia maiores id enim soluta recusandae alias minus? Itaque voluptas, quo a ut non voluptates sed incidunt praesentium molestias quisquam reiciendis odio eius magni quos enim eos quaerat impedit recusandae quidem inventore in nostrum.  As we approach the end of the year, it is essential to analyze the salary trends and compensation structures within our organization...
            </p>
          </div>
        </div>

        {/* Accept Button */}
        <button
          onClick={handleAccept}
          className="w-full mt-2 bg-gradient-to-r from-[#01ECA9] to-[#3757F8] hover:bg-blue-600 text-white p-2 rounded-md font-semibold transition"
        >
          Go to the Dashboard
        </button>
      </div>
    </div>
  )
}

export default SingleTask
