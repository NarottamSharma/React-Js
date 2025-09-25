import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const Profile = () => {
  const consumeContextValue = useContext(GlobalContext)

  console.log(consumeContextValue);
  
  return (
    <div>Profile</div>
  )
}

export default Profile