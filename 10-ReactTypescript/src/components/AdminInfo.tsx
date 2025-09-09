import type {AdminInfoList} from '../types'

type AdminInfoProps = {
  admin: AdminInfoList;
}

function AdminInfo({admin}: AdminInfoProps) {
  return (
    <div>
      <h2>Admin Info</h2>
      <p>id : {admin.id}</p>
      <p>name : {admin.name}</p>
      <p>email : {admin.email}</p>
      <p>role : {admin.role}</p>
      <p>lastlogin : {admin.lastlogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo