import {useContext} from "react";
import {ThemeContext} from "../../global/ThemeContext.jsx";

const Header = () => {


  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}>
      <h1>Context API Theme & CRUD functionality practice</h1>

      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </div>
  )
}

export default Header;
