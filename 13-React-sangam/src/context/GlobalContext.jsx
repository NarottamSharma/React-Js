import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const phoneNo = '91 7416874958';

  return (
    <GlobalContext.Provider value={{ phoneNo,darkMode, setDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
}
