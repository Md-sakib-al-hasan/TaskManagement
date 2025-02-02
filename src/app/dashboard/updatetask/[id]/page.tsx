
import UpdateTask from '@/src/app/components/UpdateTask'
import React from 'react'

const SingleTaskUpdate = async ({params}: {params: Promise<{ id: string }>}) => {
  const id = (await params).id
  return (
    <div>
       single task{id}
       <UpdateTask/>
    </div>
  )
}

export default SingleTaskUpdate
