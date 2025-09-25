import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme:Theme;
  toggleTheme: ()=> void;
}

export const ThemeContext = createContext<ThemeContextType|undefined>(undefined)

const ThemeProvider:React.FC<{children:ReactNode}> = ({children})=>{
  const [theme,setTheme] = useState<Theme>('light')

  const toggleTheme=()=>{
    setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

const Card = () => {
  const {theme, toggleTheme} = UseTheme();
  return (
    <div style={{padding: '20px', backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff'}}>
      <h2>Current theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <Card/>
    </ThemeProvider>
  );
};

export const UseTheme = ():ThemeContextType => {
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error('useTheme must be used within a ThemeProvider')
  } 
  return context;
}


export default Theme;
