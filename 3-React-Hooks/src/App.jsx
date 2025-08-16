import { useState } from "react";

const App = () => {
    // const [count, setCount] = useState(100);
    // const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1);
    // console.log(count);
    const [friends,setFriends]=useState(['Sita','Durga'])
    const addOneFriend=()=>setFriends([...friends,'Narottam'])
    const RemoveOneFriend = ()=>setFriends(friends.filter(f=>f!=='Durga'))
    const UpdateOneFriend = ()=>setFriends(
      friends.map(f=>f==='Narottam'? 'Narottam Sharma':f)
    )

    return (
        <div>
            {/* <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button> */}
            <h1>
              {friends.map((f)=>(
                <li key={f}>{f}</li>
              ))}
            </h1>
            <button onClick={addOneFriend}>Add Friend</button>
            <button onClick={RemoveOneFriend}>Remove Friend</button>
            <button onClick={UpdateOneFriend}>Edit Friend</button>
        </div>
    );
};

export default App;
