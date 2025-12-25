import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    const increment=()=>{
        if(count<10){
        setCount(count+1)
        
    }
    }

  return (
    <>
    <div className='bg-blue-300 text-center'>
       <h1>Inital:{count}</h1> 
    </div>
    <div className='text-center pt-3'>
        <button onClick={increment} className='bg-amber-400 p-1 rounded-2xl text-center'>clickme</button>
    </div>
    </>
  )
}

export default Counter