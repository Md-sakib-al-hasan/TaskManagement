
import UserDetails from '@/src/app/components/userDeatils'
import React from 'react'

const Profilelayout = async ({params}: {params: Promise<{ id: string }>}) => {
  const id = (await params).id
  return (
    <div>
       single task{id}
       <UserDetails></UserDetails>
    </div>
  )
}

export default Profilelayout
