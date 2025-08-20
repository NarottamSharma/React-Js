import React from "react";
import { Data, Data1 } from "../App";

// function ComponentC({name}) {
//   return (
//     <div>
//       <h1>{name}</h1>
//     </div>
//   )
// }
function ComponentC() {
  return (
    // <div>
    //   <Data.Consumer >
    //     {(name)=>{
    //       return <h1>{name}</h1>
    //     }}
    //   </Data.Consumer >
    // </div>
    <Data.Consumer>
      {(name) => {
        return (
          <Data1.Consumer>
            {(age) => {
              return (
                <h1>
                  My name is {name} and I'm {age} years Old
                </h1>
              );
            }}
          </Data1.Consumer>
        );
      }}
    </Data.Consumer>
    // Even this is problem so we have to use useConstext hook 
  );
}

export default ComponentC;
