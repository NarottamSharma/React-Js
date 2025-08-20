import React, { useContext } from "react";
import { Data, Data1 } from "../App";

// function ComponentC({name}) {
//   return (
//     <div>
//       <h1>{name}</h1>
//     </div>
//   )
// }
function ComponentC() {
  const userName= useContext(Data)
  const age = useContext(Data1)
  return (
    // <div>
    //   <Data.Consumer >
    //     {(name)=>{
    //       return <h1>{name}</h1>
    //     }}
    //   </Data.Consumer >
    // </div>

    // Multiple Data
    // <Data.Consumer>
    //   {(name) => {
    //     return (
    //       <Data1.Consumer>
    //         {(age) => {
    //           return (
    //             <h1>
    //               My name is {name} and I'm {age} years Old
    //             </h1>
    //           );
    //         }}
    //       </Data1.Consumer>
    //     );
    //   }}
    // </Data.Consumer>


    // Even this is problem so we have to use useConstext hook 

    <h1>
      My Name is : {userName} and I'm {age} years old
    </h1>
  );
}

export default ComponentC;
