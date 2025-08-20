import { createContext, useState } from "react";
import UseEffects from "./Components/UseEffects";
import FetchingDatausingUseEffects from "./Components/FetchingDatausingUseEffects";
import BasicEffects from "./Components/BasicEffects";
import CounterEffect from "./Components/CounterEffect";
import ComponentA from "./PropDrilling/ComponentA";
import { UserProvider } from "./useContextAssign/UserContext";
import UserProfile from "./useContextAssign/UserProfile";
import UpdateUser from "./useContextAssign/UpdateUser";
export const Data = createContext();
export const Data1 = createContext();
function App() {
  // prop drilling
  // sending name data to component c
  const name = "Narottam";
  const age = 22;
  return (
    <div>
      {/* <UseEffects /> */}
      {/* <FetchingDatausingUseEffects/> */}
      {/* <BasicEffects/> */}
      {/* <CounterEffect/> */}

      {/* Prop Drilling */}

      {/* <ComponentA name={name} /> */}

      {/* <Data.Provider value={name} >
        <ComponentA/>
      </Data.Provider> */}

      {/* Multiple data providing by use Context */}
      {/* <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA/>
        </Data1.Provider>
      </Data.Provider> */}

      {/* <UserProvider>
        <UserProfile/>
        <UpdateUser/>
      </UserProvider> */}
      
    </div>
  );
}

export default App;
