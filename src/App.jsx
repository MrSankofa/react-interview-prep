
/*
* create a header to display the Theme context
* create a TodoForm and TodoList complete to show CRUD functionality
* */

import { Header } from "./components/Header";
import { ThemeProvider } from "./global/ThemeContext";

const App = () => {


  return (
    <ThemeProvider>
      <Header/>
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        <h2>Todo List</h2>
      </div>
    </ThemeProvider>
  );
};

export default App;
