import React from 'react'

import { useParams } from 'react-router-dom'

function User() {
    const {userID } = useParams(); 
  return (
    <div className='text-3xl text-center
     bg-green-600 text-white
      h-auto p-5 w-full '>
        User:{userID}</div>
  )
}

export default User