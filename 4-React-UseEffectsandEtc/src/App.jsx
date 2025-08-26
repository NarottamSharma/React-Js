import { createContext, useState } from "react";
import UseEffects from "./Components/UseEffects";
import FetchingDatausingUseEffects from "./Components/FetchingDatausingUseEffects";
import BasicEffects from "./Components/BasicEffects";
import CounterEffect from "./Components/CounterEffect";
import ComponentA from "./PropDrilling/ComponentA";
import { UserProvider } from "./useContextAssign/UserContext";
import UserProfile from "./useContextAssign/UserProfile";
import UpdateUser from "./useContextAssign/UpdateUser";
import Ex1 from "./UseReducer/Ex1";
import Counter from "./UseReducer/Counter";
import A1 from "./UseRef/A1"
import FocusInput from "./UseRef/FocusInput";
import Timer from "./UseRef/Timer";
import useFetch from "./custom Hook/useFetch";
export const Data = createContext();
export const Data1 = createContext();
function App() {
  // prop drilling
  // sending name data to component c
  const name = "Narottam";
  const age = 22;
  
  // Custom Hook
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
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

      {/* <Ex1/> */}
      {/* <Counter/> */}

      {/* UseRef Learning */}
      {/* Custom Hook  */}
      {data && data.map((item)=>{
        return <p key={item.id}>{item.title}</p>
      })}
      const [data]= useFetch("https://jsonplaceholder.typicode.com/todos")
      {data && data.map((item)=>{
        return <p key={item.id}>{item.title}</p>
      })}
    </div>
  );
}

export default App;
