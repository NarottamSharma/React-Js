import React, { useEffect } from 'react'

function BasicEffects() {
  useEffect(() => {
    console.log("Basic Effect component mounted");


  }, [])

//   useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Timer running");
//   }, 1000);

//   return () => {
//     clearInterval(timer); // Cleanup: stop the timer when the component unmounts
//     console.log("Timer cleaned up");
//   };
// }, []);
  
  return (
    <div>
     <h1>Check the console to see the msg</h1>
    </div>
  )
}

export default BasicEffects