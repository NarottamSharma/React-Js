import Button from "./components/Button";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";
import type { Info ,AdminInfoList } from "./types";
import Counter from "./components/Counter";
import { Form } from "./components/Form";


function App() {
  const user:Info = {
    id:1,
    name:'Narottam',
    email:'nare@gmail.com'
  }

  const admin: AdminInfoList = {
    id:2,
    name:'Anusha',
    email:'anu@gmail.com',
    role:'admin',
    lastlogin:new Date(),
  }

  return (
    <div>
      {/* <User name="Narottam" age={20} isStudent={true}/> */}

      {/* <Button
        label="Click"
        onClick={() => console.log("Clicked")}
        disabled={false}
      /> */}

      {/* user info and admin info from same project */}
      {/* <UserInfo user={user} />
      <AdminInfo admin={admin} /> */}

      {/* <Counter/> */}

      {/* <Form/> */}

      

    </div>
  );
}

export default App;
