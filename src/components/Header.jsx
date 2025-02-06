import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

const Header = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div style={{ padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}
    >
      <h1>This is my theme: theme</h1>

      <button onClick={ () => toggleTheme()}>Change them</button>
    </div>
  )
}

export default Header;
