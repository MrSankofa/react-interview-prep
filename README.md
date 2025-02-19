
**Overview:**

create a header to display the Theme context
create a TodoForm and TodoList complete to show CRUD functionality

**the theme Context:**

should allow users to select a theme as light or dark


**the todo form:**

should allow a user to use a form that has a input field
and take that data from the input when the add todo button is clicked
to update the state and add the todo to the global state


**the todo list:**

should read in the todos and allow users to mark it as complete or delete the todo

if it is marked a complete than strikethrough the text
if the button is complete change the text to undo
if the button is not complete change the text to complete

**the Header:**

the header should use the context api because we need global state to apply 
the theme

Header needs a title
a button to toggle the theme
and it needs to change the styling for the entire app


the styling for the header can be like this

```html
style={{ padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}

```

you should be able to toggle the theme with a button

**The footer**

the foot should include the same theme ability as the header

```html
 <footer
      style={{
        padding: '1rem',
        background: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#f0f0f0',
        textAlign: 'center',
        marginTop: '2rem'
      }}
    >
      <p>&copy; {new Date().getFullYear()} React Fundamentals Demo</p>
    </footer>
```


