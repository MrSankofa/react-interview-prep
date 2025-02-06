import {createContext, useState} from "react";
/* eslint-disable react/prop-types */

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState("light");


  const toggleTheme = () => {
    setTheme( prevState => prevState === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
