

import React, { useState, useMemo } from 'react'

const Memo = () => {
  const [number,setNumber] = useState(0);
  const [count,setCount] = useState(0);

  function cubeNum(num){
    console.log('Calculation Done');
    return Math.pow(num,3)
  }
  const result = useMemo(() => cubeNum(number), [number]);

  return (
    <div className='p-1 m-3' >
      <input className='border-2 bg-amber-200' type="number" onChange={(e)=>{setNumber(e.target.value)}}/>
      <h1>Cube Of the Number : {result}</h1>
      <h1>Count :{count} </h1>
      <button className='border-1 bg-pink-300 rounded-2xl p-3  hover:bg-pink-700 ' onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  )
}

export default Memo