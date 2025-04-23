
export const Header = ({theme, toggleTheme}) => {

    const {theme, toggleTheme} = useContext(ThemeProvider);

    return (
        <>
            <h3>Theme Changer</h3>

            <button onClick={toggleTheme}>Toggle Theme (Current: dark)</button>
        </>

    );
}

