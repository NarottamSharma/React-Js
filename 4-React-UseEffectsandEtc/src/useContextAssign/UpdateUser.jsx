import { UserContext} from "./UserContext";
import { useContext,useState } from "react";


import React from 'react'
function UpdateUser() {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Enter New Name" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;