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
              As we approach the end of the year, it is essential to analyze the salary trends and compensation structures within our organization  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum iusto sint quos ipsam? Voluptate quos, debitis facere ut fugit error id quisquam! Itaque ipsum, ipsam quas repudiandae doloribus modi minus laborum odit, atque dolores voluptates maxime reprehenderit libero non unde optio sint? Quam placeat rerum harum tempora, repudiandae ipsum expedita debitis esse facere dolor error quasi ab tempore ullam? Impedit omnis consequatur perspiciatis aperiam molestias, quasi est magni eos ratione voluptates modi et quae porro laborum totam voluptas, esse excepturi.
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
