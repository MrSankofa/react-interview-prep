import { useContext } from "react"
import { ThemeContext } from "../global/ThemeContext"


export const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <header style={{background: theme === "light" ? "white" : "black"}}>
            <h1>Theme Changer</h1>

            <button onClick={toggleTheme} style={{color: theme === "light" ? "black" : "white", background: theme === "light" ? "white" : "black" }}>
                Toggle Theme (Current: {theme})
            </button>

        </header>

    );
}