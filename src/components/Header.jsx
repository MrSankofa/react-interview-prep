import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);


  return (
    <div style={{ padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}>

      <h1>Using the Theme: {theme}</h1>

      <button onClick={() => toggleTheme()}>Change Theme</button>
    </div>
  )
}

export default Header;
