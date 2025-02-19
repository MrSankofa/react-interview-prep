import { useContext } from "react"
import { ThemeContext } from "../global/ThemeContext"
import { Header } from "./Header";

export const ThemedApp = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
        contentEditable={true} // Makes entire page editable
        suppressContentEditableWarning={true} // Prevents React warning about controlled content
        style={{
            minHeight: "100vh",
            width: "100%",
            margin: 0,
            padding: 20,
            outline: "none", // Removes default focus outline
        }}
        >
            <Header />
            <div style={{ margin: "0 auto", maxWidth: "600px", background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white"}}>
                <h2>Todo List</h2>
            </div>
        </div>
    );
}