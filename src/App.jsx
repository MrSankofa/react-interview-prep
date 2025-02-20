
/*
* create a header to display the Theme context
* create a TodoForm and TodoList complete to show CRUD functionality
* */

import { ThemeProvider } from "./global/ThemeContext";
import { ThemedApp } from "./components/ThemeApp";

const App = () => {


  return (
    <ThemeProvider>
      <ThemedApp/>
    </ThemeProvider>
  );
};

export default App;
