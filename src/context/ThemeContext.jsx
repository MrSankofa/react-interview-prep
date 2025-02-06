/* eslint-disable react/prop-types */
import {createContext, useState} from "react";

// TODO: review rule about where you should set state.

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
   setTheme(prevState => prevState === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )


}
