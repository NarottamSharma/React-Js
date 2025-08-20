import { useState } from 'react'

function ArrayManipulation() {
    const [friends, setFriends] = useState(["Sita", "Durga"]);
    const addOneFriend = () => setFriends([...friends, "Narottam"]);
    const RemoveOneFriend = () =>
      setFriends(friends.filter((f) => f !== "Durga"));
    const UpdateOneFriend = () =>
      setFriends(friends.map((f) => (f === "Narottam" ? "Narottam Sharma" : f)));
  
    return (
      <div>
        <h1>
          {friends.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </h1>
        <button onClick={addOneFriend}>Add Friend</button>
        <button onClick={RemoveOneFriend}>Remove Friend</button>
        <button onClick={UpdateOneFriend}>Edit Friend</button>
      </div>
    );
}

export default ArrayManipulation