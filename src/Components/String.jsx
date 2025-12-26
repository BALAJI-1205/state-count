import React, { useState } from 'react'

const String = () => {
    const [message,setMessage]=useState("welcome")
    const string=()=>{
        setMessage(" good moring , good night")
    }
  return (
    <>
    <div className='bg-amber-300 p-1 rounded-2xl w-50'>
        {message}
    </div>
    <div>
<button className='bg-gray-700 mt-1 rounded-2xl p-1' onClick={string}>click</button>
    </div>
    </>
  )
}

export default String