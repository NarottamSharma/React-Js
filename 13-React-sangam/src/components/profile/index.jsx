import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

// Profile component consumes GlobalContext values
const Profile = () => {
  // The provider supplies an object: { phoneNo, darkMode, setDarkMode }
  const { phoneNo, darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <div className={darkMode ? "bg-black text-white p-4" : "bg-white text-black p-4"}>
      <h2 className="font-semibold text-lg mb-2">Profile</h2>
      <p className="mb-4">Phone No: <span className="font-mono">{phoneNo}</span></p>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-2 rounded bg-amber-500 text-black hover:bg-amber-400 transition"
      >
        Toggle Dark Mode (Currently {darkMode ? "On" : "Off"})
      </button>
    </div>
  );
};

export default Profile;