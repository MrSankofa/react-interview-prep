import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

const Footer = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <footer
      style={{
        padding: '1rem',
        background: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#f0f0f0',
        textAlign: 'center',
        marginTop: '2rem'
      }}
    >
      <p>© {new Date().getFullYear()} React Fundamentals Demo</p>
    </footer>
  )
}

export default Footer;
