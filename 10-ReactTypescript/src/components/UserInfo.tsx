import type {Info} from '../types'

type UserInfoProp = {
  user:Info;
}


function UserInfo({user}: UserInfoProp) {
  return (
    <div>
      <h2>User Information </h2>
      <p>User Id : {user.id}</p>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
    </div>
  )
}

export default UserInfo