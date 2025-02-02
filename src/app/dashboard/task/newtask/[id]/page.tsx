'use client'

import React, { use } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import bannerimage from '@/public/metting image.jpg'

const SingleTask = ({ params }: { params: Promise<{ id: string }> }) => {
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur porro aspernatur iure dolorem sit culpa eius officiis assumenda debitis, officia iste ut quibusdam facilis, quisquam quasi quis esse dolores, praesentium commodi? Voluptatibus aliquid atque quos quia delectus, unde, veniam nostrum, eveniet cum molestias velit quod. Minima repellat totam odit ipsum placeat molestiae, ratione sequi veritatis quasi doloribus aspernatur facere hic repellendus nisi. Fugiat ratione tempore nihil. Consequuntur exercitationem ratione magnam ipsum voluptates ipsa sit nihil aperiam animi fugiat voluptatum corrupti temporibus molestias, eveniet perferendis repellat omnis? Quas repellendus aliquam, iste cumque quasi quod libero repudiandae reiciendis quibusdam, quis quae pariatur? As we approach the end of the year, it is essential to analyze the salary trends and compensation structures within our organization...
            </p>
          </div>
        </div>

        {/* Accept Button */}
       <div className='flex md:gap-4 gap-1'>
       <button
          onClick={handleAccept}
          className=" w-full mt-2 bg-gradient-to-r from-[#01ECA9] to-[#3757F8] hover:bg-blue-600 text-white p-2 rounded-md font-semibold transition"
        >
          Accept
        </button>
        <button
          onClick={handleAccept}
          className=" w-full mt-2 bg-gradient-to-r from-[#01ECA9] to-[#3757F8] hover:bg-blue-600 text-white p-2 rounded-md font-semibold transition"
        >
          Reject
        </button>
       </div>
      </div>
    </div>
  )
}

export default SingleTask
